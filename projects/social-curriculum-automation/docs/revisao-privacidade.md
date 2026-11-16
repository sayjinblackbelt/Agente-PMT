# Revisão de Privacidade — Automação de Currículos

**Status:** análise documental preliminar; validação institucional pendente.

## Riscos e recomendações
O sistema pode processar contato, cidade, formação, experiências, habilidades, disponibilidade e dados de encaminhamento profissional.

1. Definir controlador, operadores, responsáveis e finalidade de cada campo.
2. Documentar base legal e transparência aos titulares; não presumir que consentimento é sempre a base adequada.
3. Separar dados necessários ao currículo de notas internas e campos administrativos.
4. Restringir planilhas, pastas e documentos a contas institucionais e ao menor privilégio.
5. Desabilitar links públicos para documentos com dados pessoais.
6. Definir retenção e procedimento para atualização, correção, exportação e descarte.
7. Evitar dados sensíveis e campos livres que coletem informações desnecessárias.
8. Revisar gatilhos Apps Script, proprietário, escopos OAuth e contas autorizadas.
9. Evitar respostas completas, telefones, documentos e links privados nos logs.
10. Testar isolamento entre equipes e acesso aos documentos gerados.
11. Definir processo de resposta a incidentes.
12. Avaliar tratamento de dados de adolescentes se o escopo for ampliado a esse público.

## Pontos técnicos no exemplo sanitizado
O script usa `replaceText` com dados oriundos do formulário. O primeiro argumento do método é uma expressão regular; valores de substituição também podem exigir tratamento de caracteres especiais. Recomenda-se validar e normalizar campos, escapar padrões, conferir placeholders e garantir que dados sejam inseridos como texto.

Validar explicitamente IDs de modelo e pasta; verificar a estrutura do evento; limitar tamanho das entradas; tratar falhas sem incluir dados pessoais em mensagens ou logs.

## Limite da auditoria
O script e a documentação públicos são exemplos sanitizados. Não foram auditados a planilha real, permissões do Drive, configurações da conta Google, gatilhos instalados ou produção. Não se pode concluir conformidade legal ou segurança operacional a partir deste exame.


## Melhorias implementadas no exemplo público

O arquivo `apps-script/gerar-curriculo.gs` foi revisado para:
- validar a presença dos IDs de modelo e pasta antes de iniciar;
- validar a estrutura do evento e os índices configurados;
- limitar o tamanho dos campos e exigir nome;
- verificar se o modelo é Google Docs e se contém os marcadores esperados;
- substituir marcadores como texto literal, sem interpretar o marcador como expressão regular;
- processar corpo, cabeçalho e rodapé do documento;
- evitar inserir nome e telefone no nome do arquivo gerado;
- não compartilhar documentos automaticamente;
- tentar colocar na lixeira uma cópia parcial quando a geração falhar;
- evitar registrar dados pessoais em logs ou mensagens de erro.

## O que ainda depende da instituição

Essas alterações são apenas no exemplo sanitizado versionado. Antes de aplicar no projeto real, é necessário conferir a ordem real das respostas, os marcadores do modelo, os IDs privados, as permissões do Drive, a conta proprietária do gatilho, os escopos OAuth e a política de retenção. Não copiar o exemplo para produção sem essa conferência.

O nome do arquivo agora usa identificador técnico e carimbo de data/hora. O documento continua contendo os dados necessários ao currículo; a pasta de destino precisa, portanto, manter acesso restrito.
