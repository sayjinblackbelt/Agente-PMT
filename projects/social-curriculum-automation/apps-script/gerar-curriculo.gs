/**
 * Exemplo sanitizado de automação de geração de currículo.
 *
 * IMPORTANTE:
 * - Este arquivo é documentação/exemplo; não contém IDs de produção.
 * - Configure MODELO_ID e PASTA_ID somente no projeto institucional privado.
 * - Ajuste FIELD_INDEXES conforme a ordem real das colunas/respostas.
 * - Use gatilho instalável de envio do formulário, sob conta institucional.
 * - A pasta de destino deve ter acesso restrito à equipe autorizada.
 *
 * Segurança:
 * - valida configuração, evento e tamanho dos campos;
 * - não coloca dados pessoais no nome do arquivo nem em logs;
 * - insere valores como texto literal, sem tratá-los como expressão regular;
 * - não compartilha documentos automaticamente.
 */

const CONFIG = {
  MODELO_ID: 'COLE_O_ID_DO_MODELO_NO_AMBIENTE_INSTITUCIONAL',
  PASTA_ID: 'COLE_O_ID_DA_PASTA_NO_AMBIENTE_INSTITUCIONAL',
  FIELD_INDEXES: {
    NOME: 1,
    TELEFONE: 2,
    CIDADE: 3,
    OBJETIVO: 4,
    EXPERIENCIA: 5,
    HABILIDADES: 6,
    CURSOS: 7
  },
  MAX_LENGTHS: {
    NOME: 160,
    TELEFONE: 80,
    CIDADE: 120,
    OBJETIVO: 600,
    EXPERIENCIA: 2500,
    HABILIDADES: 1800,
    CURSOS: 1800
  }
};

function gerarCurriculo(e) {
  validarConfiguracao_();

  if (!e || !Array.isArray(e.values)) {
    throw new Error('Evento inválido. Execute por um gatilho de envio do formulário.');
  }

  const dados = e.values;
  const campos = {};

  Object.keys(CONFIG.FIELD_INDEXES).forEach(function (campo) {
    const indice = CONFIG.FIELD_INDEXES[campo];

    if (!Number.isInteger(indice) || indice < 0 || indice >= dados.length) {
      throw new Error('Estrutura de respostas incompatível com o mapeamento configurado.');
    }

    campos[campo] = validarTexto_(
      dados[indice],
      CONFIG.MAX_LENGTHS[campo],
      campo
    );
  });

  if (!campos.NOME) {
    throw new Error('O campo obrigatório de nome está vazio.');
  }

  const substituicoes = {
    '{{NOME}}': campos.NOME,
    '{{TELEFONE}}': campos.TELEFONE,
    '{{CIDADE}}': campos.CIDADE,
    '{{OBJETIVO}}': campos.OBJETIVO,
    '{{EXPERIENCIA}}': campos.EXPERIENCIA,
    '{{HABILIDADES}}': campos.HABILIDADES,
    '{{CURSOS}}': campos.CURSOS
  };

  const arquivoModelo = DriveApp.getFileById(CONFIG.MODELO_ID);
  const pastaDestino = DriveApp.getFolderById(CONFIG.PASTA_ID);

  if (arquivoModelo.getMimeType() !== MimeType.GOOGLE_DOCS) {
    throw new Error('O arquivo configurado como modelo não é um Google Docs.');
  }

  const docModelo = DocumentApp.openById(CONFIG.MODELO_ID);
  const conteudoModelo = obterTextoDocumento_(docModelo);

  Object.keys(substituicoes).forEach(function (marcador) {
    if (conteudoModelo.indexOf(marcador) === -1) {
      throw new Error('O modelo não contém todos os marcadores obrigatórios.');
    }
  });

  // Não usar nome, telefone ou outro dado pessoal no nome do arquivo.
  const identificador = Utilities.getUuid().substring(0, 8);
  const carimbo = Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(),
    'yyyyMMdd-HHmmss'
  );
  const nomeArquivo = 'Curriculo-' + carimbo + '-' + identificador;

  let arquivoGerado = null;

  try {
    arquivoGerado = arquivoModelo.makeCopy(nomeArquivo, pastaDestino);
    const documento = DocumentApp.openById(arquivoGerado.getId());

    const secoes = [
      documento.getBody(),
      documento.getHeader(),
      documento.getFooter()
    ].filter(function (secao) {
      return secao !== null;
    });

    secoes.forEach(function (secao) {
      substituirMarcadoresLiterais_(secao, substituicoes);
    });

    documento.saveAndClose();

    // Não altera permissões nem compartilha o documento.
    // O acesso é herdado das permissões da pasta de destino.
    return arquivoGerado.getId();

  } catch (erro) {
    // Se a geração falhar após a cópia, tenta remover o documento parcial.
    if (arquivoGerado) {
      try {
        arquivoGerado.setTrashed(true);
      } catch (erroAoLimpar) {
        // Não registrar dados pessoais nem detalhes do documento.
      }
    }

    throw new Error(
      'Não foi possível concluir a geração do currículo. ' +
      'Verifique a configuração do modelo, da pasta e dos marcadores.'
    );
  }
}

function validarConfiguracao_() {
  if (
    !CONFIG.MODELO_ID ||
    !CONFIG.PASTA_ID ||
    CONFIG.MODELO_ID.indexOf('COLE_') === 0 ||
    CONFIG.PASTA_ID.indexOf('COLE_') === 0
  ) {
    throw new Error('Configure os IDs do modelo e da pasta no ambiente privado.');
  }
}

function validarTexto_(valor, limite, campo) {
  const texto = valor === null || valor === undefined
    ? ''
    : String(valor).trim();

  if (texto.length > limite) {
    throw new Error('Um campo excedeu o limite permitido: ' + campo + '.');
  }

  return texto;
}

/**
 * Obtém texto de uma seção do documento, inclusive tabelas e elementos filhos.
 */
function obterTextoDocumento_(documento) {
  const secoes = [
    documento.getBody(),
    documento.getHeader(),
    documento.getFooter()
  ].filter(function (secao) {
    return secao !== null;
  });

  return secoes.map(obterTextoElemento_).join('\n');
}

function obterTextoElemento_(elemento) {
  if (elemento.getType() === DocumentApp.ElementType.TEXT) {
    return elemento.asText().getText();
  }

  let texto = '';

  if (typeof elemento.getNumChildren === 'function') {
    for (let i = 0; i < elemento.getNumChildren(); i++) {
      texto += obterTextoElemento_(elemento.getChild(i));
    }
  }

  return texto;
}

/**
 * Substitui marcadores literais em nós de texto.
 * Não usa replaceText(), pois o marcador seria interpretado como regex.
 * As ocorrências são processadas da direita para a esquerda para preservar
 * os índices originais do texto. Valores inseridos não são reprocessados.
 */
function substituirMarcadoresLiterais_(elemento, substituicoes) {
  if (elemento.getType() === DocumentApp.ElementType.TEXT) {
    const texto = elemento.asText();
    const original = texto.getText();
    const ocorrencias = [];

    Object.keys(substituicoes).forEach(function (marcador) {
      let inicio = original.indexOf(marcador);

      while (inicio !== -1) {
        ocorrencias.push({
          inicio: inicio,
          fim: inicio + marcador.length - 1,
          valor: substituicoes[marcador]
        });

        inicio = original.indexOf(marcador, inicio + marcador.length);
      }
    });

    ocorrencias.sort(function (a, b) {
      return b.inicio - a.inicio;
    });

    ocorrencias.forEach(function (ocorrencia) {
      texto.deleteText(ocorrencia.inicio, ocorrencia.fim);

      if (ocorrencia.valor) {
        texto.insertText(ocorrencia.inicio, ocorrencia.valor);
      }
    });

    return;
  }

  if (typeof elemento.getNumChildren === 'function') {
    for (let i = 0; i < elemento.getNumChildren(); i++) {
      substituirMarcadoresLiterais_(elemento.getChild(i), substituicoes);
    }
  }
}
