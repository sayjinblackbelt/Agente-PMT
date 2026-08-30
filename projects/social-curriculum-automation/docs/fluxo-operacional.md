# Fluxo operacional

## 1. Atendimento

Um profissional realiza o atendimento com a pessoa e coleta as informações necessárias para sua apresentação profissional.

## 2. Cadastro

O profissional preenche o Google Forms. O formulário utiliza opções simples para acelerar o atendimento e campos abertos para informações específicas.

## 3. Registro

O envio cria uma nova linha no Google Sheets, formando a base estruturada do banco de talentos.

## 4. Automação

Um gatilho do Google Apps Script identifica o novo registro e executa a função de geração.

## 5. Geração do currículo

O script copia o modelo de Google Docs e substitui marcadores pelos dados cadastrados.

Exemplo conceitual:

```text
{{NOME}}
{{TELEFONE}}
{{CIDADE}}
{{OBJETIVO}}
{{EXPERIENCIA}}
{{HABILIDADES}}
{{CURSOS}}
```

## 6. Revisão

O documento gerado continua editável. A equipe pode revisar a redação, conferir os dados e adequar o currículo à finalidade do encaminhamento.

## 7. Banco de talentos

O cadastro permanece organizado para consultas posteriores, possibilitando localizar perfis por área, disponibilidade, habilidades e outros critérios definidos institucionalmente.

## 8. Encaminhamento

Quando surgir uma oportunidade compatível, a equipe pode filtrar o banco e selecionar os candidatos conforme os critérios definidos pela organização e pela vaga.

## Princípio de decisão

A automação deve facilitar a operação, não substituir a avaliação profissional da equipe. A seleção e o encaminhamento permanecem decisões humanas e institucionais.
