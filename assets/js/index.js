inicializador();

function inicializador(){
    nomeCascata();
    iniciarAnimacaoHand();
    nomeDigitando();
}

function nomeCascata() {
    const elemento = document.querySelector('#animated-name');
    const texto = elemento.textContent;
    elemento.innerHTML = '';

    texto.split('').forEach((letra, index) => {
        const span = document.createElement('span');
        span.textContent = letra;

        span.style.transitionDelay = `${index * 0.05}s`;
        elemento.appendChild(span);
    })
}

function iniciarAnimacaoHand() {
  const hand = document.querySelector('#hand');
  if (!hand) return;

  function animar() {
    hand.classList.add('waving');
    setTimeout(() => {
      hand.classList.remove('waving');
    }, 1500);
  }

  window.addEventListener('load', animar);

  hand.addEventListener('mouseenter', animar);
}

function nomeDigitando() {
    const texto = "Karlos Henryque Pereira ";
    const elemento = document.getElementById('nome');
    let i = 0;

    elemento.textContent = ''; 
    
    function digitar(){
        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
            setTimeout(digitar, 150);
        }
    }
    digitar();
}