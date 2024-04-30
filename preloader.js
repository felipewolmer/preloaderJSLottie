const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%; /* Definindo a largura como 50% */
    height: 50%; /* Definindo a altura como 50% */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(238, 139, 96, 1);
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
        path: 'https://felipewolmer.github.io/preloaderJSLottie/loading.json',
    });
}

function hideLoader() {
    // Suavizando o efeito antes de ocultar
    lottieContainer.style.opacity = 0;
    // Ocultando o cachorrinho após 1 segundo
    setTimeout(() => {
        lottieContainer.style.display = 'none';
    }, 1000); // Tempo de espera após o carregamento completo em milissegundos
}

document.addEventListener('DOMContentLoaded', showLoader);

window.addEventListener('load', () => {
    // Esperando 1 segundo antes de ocultar o cachorrinho
    setTimeout(hideLoader, 2000);
});
