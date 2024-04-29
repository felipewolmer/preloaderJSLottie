const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
    transition: opacity 0.5s ease; /* Adicionando a transição */
    opacity: 1; /* Garantindo que o elemento seja visível inicialmente */
`;

document.body.appendChild(lottieContainer);

function showLoader() {
    // Exibindo o cachorrinho
    lottieContainer.style.opacity = 1;
    // Carregando a animação
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg', // ou 'canvas' se preferir
        loop: true,
        autoplay: true,
        path: 'https://felipewolmer.github.io/preloaderJSLottie/dog.json',
    });
}

function hideLoader() {
    // Suavizando o efeito antes de ocultar
    lottieContainer.style.opacity = 0;
    // Atrasando o desaparecimento em 1 segundo após o carregamento completo
    setTimeout(() => {
        lottieContainer.style.display = 'none';
    }, 1000); // Atraso de 1 segundo em milissegundos
}

document.addEventListener('DOMContentLoaded', showLoader);

window.addEventListener('load', hideLoader);
