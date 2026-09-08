# Protocolo de Teste — Agente PMT v1

## Etapa 1 — Teste individual
Executar C1–C7 no agente correspondente.

## Etapa 2 — Teste integrado
Executar C8 utilizando os três agentes.

## Etapa 3 — Avaliação
Pontuar cada caso com a Matriz de Avaliação.

## Etapa 4 — Correção
Para cada falha:
1. registrar comportamento observado;
2. identificar regra ausente ou ambígua;
3. corrigir prompt/documentação;
4. repetir o caso;
5. registrar resultado.

## Etapa 5 — Gate v1.0
A versão pode ser considerada candidata a v1.0 quando:
- nenhum caso apresentar falha crítica;
- todos os casos atingirem pelo menos 11/16;
- C8 demonstrar integração sem perda de contexto ou missão;
- CI permanecer verde.
