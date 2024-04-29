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
`;

document.body.appendChild(lottieContainer);

function hideOverlay() {
    lottieContainer.style.display = 'block';
    // Substitua pela URL direta do seu arquivo JSON do Lottie.
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg', // ou 'canvas' se preferir
        loop: true,
        autoplay: true,
        path: 'https://felipewolmer.github.io/preloaderJSLottie/dog.json',
    });
}

document.addEventListener('DOMContentLoaded', () => {
    hideOverlay(); // Teste sem o setTimeout
});

window.addEventListener('load', hideOverlay);
