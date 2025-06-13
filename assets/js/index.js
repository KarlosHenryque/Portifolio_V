inicializador();

function inicializador(){
    nomeCascata();
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