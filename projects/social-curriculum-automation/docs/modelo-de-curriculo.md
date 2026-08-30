# Modelo de currículo

## Objetivo do modelo

Produzir um currículo simples, legível, profissional e facilmente editável pela equipe.

## Estrutura sugerida

```text
NOME COMPLETO
Telefone | Cidade

OBJETIVO PROFISSIONAL
Área ou função de interesse.

EXPERIÊNCIA PROFISSIONAL
Experiências formais e informais relevantes, descritas de forma objetiva.

HABILIDADES
Competências e atividades que a pessoa efetivamente sabe realizar.

FORMAÇÃO E CURSOS
Escolaridade, cursos e formações informados no atendimento.

DISPONIBILIDADE
Horários ou turnos disponíveis.
```

## Diretriz de redação

A edição deve transformar respostas informais em linguagem profissional, preservando o significado original.

Exemplo conceitual:

```text
Resposta: "já fiz uns bicos de ajudante de obra"

Currículo: "Experiência em atividades de apoio em obras e serviços de construção civil."
```

A equipe deve evitar acrescentar atividades que não tenham sido relatadas pela pessoa.

## Compatibilidade com automação

Os marcadores do modelo devem corresponder aos campos utilizados pelo Apps Script, por exemplo:

```text
{{NOME}}
{{TELEFONE}}
{{CIDADE}}
{{OBJETIVO}}
{{EXPERIENCIA}}
{{HABILIDADES}}
{{CURSOS}}
{{DISPONIBILIDADE}}
```
