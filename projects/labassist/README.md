# LabAssist — Sistema de Relatórios Técnicos

## Visão geral

O **LabAssist** é um novo agente educacional de Inteligência Artificial proposto a partir de uma produção de educando realizada no contexto de formação técnica.

Seu objetivo é apoiar estudantes de cursos técnicos na elaboração de relatórios de experimentos de **Eletrônica e Engenharia Elétrica**, trabalhando com roteiros, fotografias, anotações, medições, cálculos e fontes técnicas confiáveis.

O LabAssist é um projeto distinto do agente **Meu Primeiro Currículo**. Ambos permanecem no mesmo repositório como projetos educacionais independentes.

## Origem

O conceito do LabAssist deriva da atividade de elaboração de prompt realizada por um educando. O prompt original foi analisado, sanitizado e transformado em especificação de agente, preservando sua finalidade pedagógica e técnica.

O material de origem permanece registrado em:

- `../atividade-prompt-educando/prompt-educando-sanitizado.md`

## Objetivo

Ajudar o estudante a produzir relatórios técnicos confiáveis, claros e verificáveis, sem substituir sua participação nem inventar dados experimentais.

## Escopo técnico

- Fundamentos de eletricidade
- Circuitos elétricos
- Eletrônica
- Componentes eletrônicos
- Instrumentação e medições
- Fórmulas e cálculos
- Relatórios técnicos
- ABNT aplicável

## Princípios centrais

### 1. Não inventar dados

Valores, medições, componentes, conexões e resultados devem ser baseados em informações confirmadas.

### 2. Fidelidade ao experimento

O relatório deve representar o que realmente foi realizado pelo estudante.

### 3. Precisão técnica

Cálculos devem ser refeitos e verificados. Unidades e conversões devem ser conferidas.

### 4. Transparência

Dúvidas, conflitos, informações ilegíveis e hipóteses devem ser identificados claramente.

### 5. Participação do estudante

O estudante deve revisar o conteúdo antes da geração dos arquivos finais.

## Fluxo resumido

```text
Roteiro + Fotos + Dados
        ↓
Análise dos materiais
        ↓
Identificação de informações
        ↓
Verificação de dúvidas e conflitos
        ↓
Cálculos e validação
        ↓
Construção do relatório
        ↓
Revisão pelo estudante
        ↓
DOCX + PDF
```

## Documentação

- [Especificação do agente](prompt-mestre.md)
- [Fluxo operacional](fluxo-do-agente.md)
- [Base de conhecimento](base-de-conhecimento.md)
- [Plano de testes](testes.md)

## Relação com o projeto principal

Este diretório foi criado para adicionar o LabAssist sem substituir, apagar ou alterar a documentação do projeto **Meu Primeiro Currículo**.
