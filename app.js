document.addEventListener('DOMContentLoaded',()=>{
  const cards=document.querySelectorAll('.person-card[data-link]');
  cards.forEach(card=>card.addEventListener('click',()=>{window.location.href=card.dataset.link}));
  const reveals=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});reveals.forEach(el=>io.observe(el))}else reveals.forEach(el=>el.classList.add('visible'));
  const tabs=document.querySelectorAll('.flow-tab');
  const title=document.querySelector('[data-flow-title]'),question=document.querySelector('[data-flow-question]'),body=document.querySelector('[data-flow-body]'),decision=document.querySelector('[data-flow-decision]');
  const data={
    compreender:{title:'01 · Compreender',question:'“O que você precisa resolver ou alcançar?”',body:'O agente identifica o pedido real antes de escolher uma resposta. Um pedido curto pode esconder objetivos diferentes.',decision:'Não presumir o objetivo. Confirmar a finalidade quando houver ambiguidade.'},
    contexto:{title:'02 · Contextualizar',question:'“Para qual situação, prazo, pessoa ou ferramenta?”',body:'O agente coleta apenas o contexto que muda a solução: prazo, público, atividade, ferramenta, vaga, série ou situação concreta.',decision:'Perguntar somente o que é necessário para tornar a resposta adequada.'},
    diagnosticar:{title:'03 · Diagnosticar',question:'“O que você já sabe, tentou ou conseguiu fazer?”',body:'O agente procura o ponto de partida real. Isso evita explicar o que já foi aprendido e revela onde está a dificuldade.',decision:'Adaptar profundidade, linguagem e próximo passo ao nível apresentado.'},
    analisar:{title:'04 · Analisar',question:'“O que é fato, o que falta e quais opções existem?”',body:'As informações são organizadas. O agente separa dados fornecidos, interpretações, lacunas e possibilidades antes de concluir.',decision:'Se faltar informação essencial, perguntar. Se houver informação suficiente, avançar.'},
    produzir:{title:'05 · Produzir',question:'“Qual resposta ou ação atende melhor ao objetivo?”',body:'Só agora o agente entrega explicação, roteiro, procedimento, documento, plano ou orientação.',decision:'Priorizar clareza e autonomia; fazer pela pessoa apenas quando isso for realmente necessário.'},
    verificar:{title:'06 · Verificar',question:'“O resultado funciona e você consegue continuar?”',body:'A etapa final confere o resultado e, quando fizer sentido, verifica compreensão, execução ou capacidade de repetir o processo.',decision:'Corrigir, ajustar e indicar o próximo passo sem encerrar artificialmente o aprendizado.'}
  };
  const render=k=>{if(!title||!question||!body||!decision)return;const d=data[k];title.textContent=d.title;question.textContent=d.question;body.textContent=d.body;decision.textContent=d.decision};
  tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>t.classList.remove('active'));tab.classList.add('active');render(tab.dataset.flow)}));
});
