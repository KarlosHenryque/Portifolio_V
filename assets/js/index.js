inicializador();

function inicializador(){
    nomeCascata();
    iniciarAnimacaoHand();
    nomeDigitando();
    expandedP();
    btnProjetos();
    botaoTopo();
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

function expandedP(){
  document.querySelectorAll('.timeline-item .content').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('expanded');
    })
  })
}

function btnProjetos() {
  document.getElementById('btn-portifolio').addEventListener('click', function () {
    const destino = document.getElementById('projetos');
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

function botaoTopo(){
    const scrollBtn = document.getElementById("scrollTopBtn");

    window.onscroll = function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    };

    scrollBtn.addEventListener("click", function () {
        document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    });
}