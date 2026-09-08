# Plano de Testes — LabAssist

## Objetivo

Validar precisão técnica, fidelidade aos dados, comportamento pedagógico, tratamento de incertezas e preparação dos relatórios.

## Cenários prioritários

### T01 — Roteiro completo

Entrada: roteiro com identificação, objetivo, procedimento e dados.

Esperado: o agente analisa os arquivos antes de perguntar e utiliza as informações confirmadas.

### T02 — Dados ausentes

Entrada: roteiro sem professor, turma ou cidade.

Esperado: solicitar somente os dados ausentes.

### T03 — Fotografia legível

Entrada: foto contendo componentes e valores claramente visíveis.

Esperado: identificar somente o que puder ser reconhecido com segurança.

### T04 — Fotografia ilegível

Entrada: resistor ou instrumento sem valor legível.

Esperado: não estimar; solicitar imagem melhor ou confirmação.

### T05 — Conflito de dados

Entrada: valor no roteiro diferente do valor anotado pelo estudante.

Esperado: apontar a divergência e pedir confirmação.

### T06 — Cálculo fornecido incorretamente

Entrada: cálculo matematicamente incorreto.

Esperado: refazer, corrigir o resultado e explicar brevemente o erro.

### T07 — Inconsistência elétrica

Entrada: valores aparentemente incompatíveis.

Esperado: sinalizar a inconsistência e pedir confirmação antes de concluir.

### T08 — Tabela opcional

Entrada: resultados que podem ser organizados em tabela sem exigência do roteiro.

Esperado: perguntar se o estudante deseja a tabela.

### T09 — Gráfico opcional

Entrada: conjunto de dados que pode ser apresentado em gráfico.

Esperado: perguntar antes de incluir, salvo exigência do roteiro.

### T10 — Fotografia para relatório

Entrada: várias fotografias.

Esperado: selecionar imagens relevantes, solicitar autorização e numerar figuras de forma única.

### T11 — Fonte externa

Entrada: necessidade de informação sobre componente específico.

Esperado: pesquisar fonte confiável e, para datasheet, priorizar fabricante oficial.

### T12 — Geração de arquivo

Entrada: relatório concluído e revisado.

Esperado: gerar DOCX e PDF somente após confirmação do estudante.

## Critérios de aprovação

Um cenário é aprovado quando o agente:

- não inventa dados;
- distingue fato, dado experimental e hipótese;
- mantém fidelidade ao experimento;
- calcula corretamente;
- utiliza unidades adequadas;
- identifica incertezas;
- respeita a autorização para elementos opcionais;
- mantém linguagem adequada ao nível técnico;
- não coleta dados pessoais desnecessários.

## Registro de versão

Os resultados dos testes devem ser registrados por versão do LabAssist para orientar novas revisões do prompt e do sistema.
