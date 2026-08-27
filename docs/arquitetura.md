# Arquitetura — Meu Primeiro Currículo

## 1. Visão geral

O **Meu Primeiro Currículo** é um agente educacional de Inteligência Artificial desenvolvido no contexto do Programa de Preparação para o Mundo do Trabalho (PMT), destinado principalmente a jovens de 14 a 17 anos em busca da primeira oportunidade profissional.

O projeto separa a construção da solução em duas funções:

- **ChatGPT:** planejamento, arquitetura, diretrizes, fluxo e Prompt Mestre.
- **Google Gemini:** implementação do agente e testes de uso.

Fluxo conceitual:

```text
ChatGPT
  ↓
Arquitetura + diretrizes
  ↓
Prompt Mestre
  ↓
Google Gemini
  ↓
Agente "Meu Primeiro Currículo"
  ↓
Estudante
```

## 2. Problema educacional

Muitos jovens em início de carreira possuem pouca ou nenhuma experiência profissional formal e têm dificuldade para reconhecer, organizar e comunicar suas próprias competências. O agente deve transformar essa dificuldade em uma oportunidade de aprendizagem.

O currículo é tratado como resultado de um processo de reflexão, e não como um formulário que a IA simplesmente preenche.

## 3. Objetivo

Orientar o estudante na construção de um currículo de início de carreira, ajudando-o a reconhecer formação, experiências, conhecimentos, competências e objetivos profissionais, mantendo fidelidade às informações fornecidas.

## 4. Papéis do agente

O agente atua como:

- entrevistador;
- orientador;
- organizador de informações;
- facilitador de autoconhecimento;
- revisor de linguagem;
- adaptador do currículo para vagas.

Não atua como recrutador, não garante emprego e não deve tomar decisões profissionais pelo estudante.

## 5. Princípios de projeto

### Autonomia

O estudante deve participar da construção das respostas e compreender as escolhas feitas.

### Maiêutica

Perguntas orientadoras são usadas para ajudar o estudante a descobrir informações sobre si mesmo.

### Saneamento mental

O agente organiza pensamentos e experiências antes de convertê-los em texto profissional.

### Veracidade

A linguagem pode ser profissionalizada, mas a realidade não pode ser alterada.

### Privacidade

São solicitadas apenas informações necessárias ao objetivo do currículo.

## 6. Modelo de transformação

```text
Experiência → Ação → Aprendizado → Competência → Comunicação profissional
```

Exemplo: uma atividade escolar pode revelar organização, colaboração ou resolução de problemas quando o estudante explica o que fez, qual era sua responsabilidade e o que aprendeu.

## 7. Componentes documentais

- `README.md` — apresentação pública do projeto.
- `index.md` — índice e mapa da documentação.
- `docs/arquitetura.md` — arquitetura e decisões do projeto.
- `docs/prompt-mestre.md` — instrução principal para implementação do agente.
- `docs/diretrizes-pedagogicas.md` — princípios pedagógicos.
- `docs/fluxo-do-agente.md` — estados e comportamento operacional.
- `docs/testes.md` — plano e registro de testes.

## 8. Evolução prevista

A versão inicial é conceitual e deve passar por testes com diferentes perfis de estudantes antes de ser considerada estável. O projeto deve evoluir por ciclos:

```text
Construir → Testar → Observar → Corrigir → Testar novamente
```
