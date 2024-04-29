const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

const image = document.createElement('img');
image.src = 'https://jvsc99.github.io/preloaderJSLottie/JVGIsylS3F-3.json'; // Substitua pela URL direta da sua imagem ou arquivo JSON do Lottie.
image.style.cssText = `
    width: 200px; /* ou ajuste para o tamanho desejado */
    height: 200px; /* ou ajuste para o tamanho desejado */
`;

document.body.appendChild(overlay);
overlay.appendChild(image);

function hideOverlay() {
    overlay.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    hideOverlay(); // Teste sem o setTimeout
});

window.addEventListener('load', hideOverlay);
