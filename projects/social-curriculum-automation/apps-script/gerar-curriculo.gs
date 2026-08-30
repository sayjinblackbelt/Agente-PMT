/**
 * Exemplo sanitizado de automação de geração de currículo.
 *
 * ATENÇÃO:
 * - Não usar IDs reais em repositórios públicos.
 * - Preencher MODELO_ID e PASTA_ID apenas no ambiente institucional.
 * - O projeto real pode ter campos adicionais conforme o formulário.
 */

const CONFIG = {
  MODELO_ID: 'COLE_O_ID_DO_MODELO_NO_AMBIENTE_INSTITUCIONAL',
  PASTA_ID: 'COLE_O_ID_DA_PASTA_NO_AMBIENTE_INSTITUCIONAL'
};

function gerarCurriculo(e) {
  if (!e || !e.values) {
    throw new Error('A função deve ser executada por um gatilho de envio do formulário.');
  }

  const dados = e.values;

  // Índices abaixo são apenas um exemplo sanitizado.
  const nome = dados[1] || '';
  const telefone = dados[2] || '';
  const cidade = dados[3] || '';
  const objetivo = dados[4] || '';
  const experiencia = dados[5] || '';
  const habilidades = dados[6] || '';
  const cursos = dados[7] || '';

  const arquivo = DriveApp
    .getFileById(CONFIG.MODELO_ID)
    .makeCopy(`${nome} - Currículo`, DriveApp.getFolderById(CONFIG.PASTA_ID));

  const doc = DocumentApp.openById(arquivo.getId());
  const body = doc.getBody();

  body.replaceText('{{NOME}}', nome);
  body.replaceText('{{TELEFONE}}', telefone);
  body.replaceText('{{CIDADE}}', cidade);
  body.replaceText('{{OBJETIVO}}', objetivo);
  body.replaceText('{{EXPERIENCIA}}', experiencia);
  body.replaceText('{{HABILIDADES}}', habilidades);
  body.replaceText('{{CURSOS}}', cursos);

  doc.saveAndClose();
}
