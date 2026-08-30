# Arquitetura

## Visão geral

A solução utiliza serviços do Google Workspace como componentes de uma pequena aplicação orientada a eventos.

```text
[Equipe de atendimento]
          |
          v
   [Google Forms]
          |
          v
   [Google Sheets]
          |
          v
 [Apps Script Trigger]
          |
          +----> [Classificação / controles]
          |
          v
 [Modelo Google Docs]
          |
          v
 [Currículo gerado]
```

## Componentes

| Componente | Função |
|---|---|
| Google Forms | Coleta estruturada das informações durante o atendimento |
| Google Sheets | Armazenamento, organização, filtros e controles |
| Google Apps Script | Orquestração da automação |
| Google Docs | Modelo e saída editável do currículo |
| Google Drive | Armazenamento dos documentos gerados |

## Evento principal

O processamento é iniciado por um gatilho de envio de formulário.

A função de automação recebe o evento, lê as respostas e utiliza um documento-modelo para gerar uma nova cópia do currículo.

## Contrato conceitual dos dados

Os campos principais são:

- nome;
- telefone/contato;
- cidade;
- objetivo profissional;
- experiências;
- habilidades;
- cursos;
- disponibilidade;
- participação em atividades;
- observações internas.

A implementação real pode possuir outros campos. Os nomes exatos e os identificadores de planilhas/documentos não devem ser publicados neste repositório.

## Dados derivados

O banco pode utilizar campos administrativos derivados, como:

- status do atendimento;
- prioridade de encaminhamento;
- perfil profissional;
- situação de encaminhamento.

Esses campos devem ser tratados como informações operacionais e seguir as regras internas da organização.

## Segurança técnica

IDs de documentos, IDs de pastas, tokens, chaves, URLs privadas e quaisquer credenciais devem permanecer fora do código público.

Uma implementação compartilhável deve utilizar configuração externa ou valores substituídos por placeholders, por exemplo:

```javascript
const MODELO_ID = 'COLE_O_ID_DO_MODELO';
const PASTA_ID = 'COLE_O_ID_DA_PASTA';
```
