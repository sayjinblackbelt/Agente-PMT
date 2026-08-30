# Automação de Currículos e Banco de Talentos

Projeto de automação para atendimento social e empregabilidade, desenvolvido com Google Forms, Google Sheets, Google Docs e Google Apps Script.

> **Nota de privacidade:** este repositório é sanitizado. Não contém nomes, telefones, e-mails, documentos, endereços, respostas reais de usuários, links privados, IDs de arquivos ou credenciais.

## Contexto

A solução foi concebida para uma organização do terceiro setor que atua como ponte entre pessoas atendidas por seus serviços e oportunidades oferecidas por empregadores parceiros.

O atendimento é voltado a adultos em situação de vulnerabilidade social. A organização também oferece oficinas socioeducativas relacionadas ao mercado de trabalho, incluindo informática e produtividade digital, panificação, barbearia e formação na área elétrica.

A automação foi criada para apoiar a equipe no cadastramento profissional, na geração de currículos e na organização de um banco de talentos.

## Problema

A elaboração manual de currículos tende a consumir tempo da equipe, gerar documentos inconsistentes e dificultar a organização das informações para futuros encaminhamentos.

## Solução

O fluxo automatizado é:

```text
Atendimento
   ↓
Google Forms
   ↓
Google Sheets
   ↓
Google Apps Script
   ↓
Google Docs
   ↓
Currículo editável
   ↓
Banco de talentos
   ↓
Encaminhamento para oportunidades
```

O formulário é preenchido pelos profissionais da organização durante o atendimento. O usuário do serviço não precisa operar o sistema diretamente.

## Funcionalidades

- Cadastro estruturado de candidatos.
- Campos com opções simples para acelerar o atendimento.
- Campos abertos para registrar informações que não se encaixam nas opções pré-definidas.
- Registro centralizado em Google Sheets.
- Geração automática de currículo em Google Docs a partir de um modelo.
- Possibilidade de revisão manual antes do encaminhamento.
- Organização de dados para formação de banco de talentos.
- Classificação por perfil profissional e prioridade.
- Possibilidade de priorizar pessoas que participam voluntariamente das atividades da organização, conforme política interna.

## Arquitetura

### Google Forms

Interface de entrada de dados utilizada pela equipe de atendimento.

### Google Sheets

Camada de armazenamento e organização dos registros. Pode conter campos de controle como status, prioridade e perfil profissional.

### Google Apps Script

Camada de automação responsável por:

1. receber o evento de envio do formulário;
2. interpretar as respostas;
3. copiar o modelo de currículo;
4. substituir os campos do modelo pelos dados cadastrados;
5. salvar o documento gerado em uma pasta definida;
6. permitir futuras extensões, como geração de PDF e notificações.

### Google Docs

Modelo editável usado como base para os currículos gerados.

## Princípios de implementação

### Simplicidade

As opções do formulário devem privilegiar respostas rápidas e fáceis de identificar durante uma conversa de atendimento.

### Flexibilidade

Toda categoria importante deve, quando fizer sentido, permitir a opção **Outro** ou um campo aberto para complementar a informação.

### Revisão humana

A automação produz o documento, mas a equipe continua responsável por validar as informações antes de qualquer encaminhamento.

### Veracidade

O sistema deve organizar e profissionalizar as informações, sem inventar experiências, cursos, competências ou certificações.

### Privacidade

Os dados reais dos usuários devem permanecer exclusivamente nos ambientes institucionais autorizados. O repositório de desenvolvimento/documentação não deve receber dados pessoais reais.

## Indicadores de validação

A solução já está em uso e a operação acumulou **mais de 400 atendimentos/cadastros**.

Esse volume demonstra que a automação deixou de ser apenas um protótipo e passou a funcionar como ferramenta operacional de apoio à equipe.

## Benefícios esperados

- redução do esforço manual para gerar currículos;
- padronização dos documentos;
- maior rapidez no atendimento;
- melhor organização do banco de talentos;
- maior capacidade de localizar perfis compatíveis com oportunidades;
- fortalecimento da ponte entre atendimento social, qualificação e empregabilidade.

## Implementação

A primeira versão foi estruturada como uma solução de baixo custo usando ferramentas já disponíveis no ecossistema Google.

O desenvolvimento pode ser realizado em ambiente de trabalho separado, enquanto o treinamento da equipe ocorre em momento definido com a coordenação.

### Capacitação prevista

Treinamento de aproximadamente **1 hora**, cobrindo:

- preenchimento do formulário;
- consulta e organização do banco de talentos;
- geração e revisão dos currículos;
- cuidados com informações pessoais;
- procedimentos básicos para encaminhamento.

## Evolução planejada

Possíveis próximos passos:

- geração automática de PDF;
- controle de status do candidato;
- filtros avançados para encaminhamento;
- categorias padronizadas de competências;
- indicadores e dashboard;
- histórico de encaminhamentos;
- registro de resultados de empregabilidade;
- documentação de governança e proteção de dados;
- criação de uma versão reutilizável para outras iniciativas sociais.

## Estrutura sugerida

```text
social-curriculum-automation/
├── README.md
├── docs/
│   ├── arquitetura.md
│   ├── fluxo-operacional.md
│   ├── formulario.md
│   ├── banco-de-talentos.md
│   ├── modelo-de-curriculo.md
│   ├── privacidade.md
│   └── roadmap.md
├── apps-script/
│   └── gerar-curriculo.gs
├── examples/
│   └── dados-sanitizados.md
└── assets/
    └── .gitkeep
```

## Status

**Status:** Operacional / versão inicial validada

**Escala observada:** mais de 400 cadastros atendidos

**Stack:** Google Forms + Google Sheets + Google Docs + Google Apps Script

## Licenciamento e uso

Antes de reutilizar a solução em outro contexto, revise requisitos de privacidade, permissões de acesso, políticas institucionais e regras aplicáveis ao tratamento de dados pessoais.
