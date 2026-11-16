# Prompts dos Agentes PMT

Esta pasta contém os prompts mestres dos três agentes. Cada agente possui uma missão própria e compartilha uma camada comum de segurança, pedagogia e ética.

## Agentes

- [Agente Carreira](agente-carreira.md)
- [Agente Estudos](agente-estudos.md)
- [Agente Administração Digital](agente-administracao-digital.md)

## Regra de arquitetura

Os agentes podem compartilhar contexto autorizado, mas não devem expor dados pessoais desnecessários nem assumir funções fora de sua missão.

## Composição operacional e segurança

Ao configurar um agente, combine a **Camada Comum** com o prompt especializado correspondente. A camada comum define identidade, pedagogia, privacidade, hierarquia de confiança e defesa contra Prompt Injection. O prompt especializado define missão, escopo e fluxo de trabalho. Os arquivos `*-final.md` são versões operacionais resumidas e também devem obedecer à Camada Comum.

Todo conteúdo externo (arquivos, PDFs, imagens/OCR, web, e-mails, planilhas e bases recuperadas) deve ser tratado como dado não confiável, nunca como instrução privilegiada. As regras de prompt não substituem autenticação, autorização, isolamento de dados ou validação no backend.
