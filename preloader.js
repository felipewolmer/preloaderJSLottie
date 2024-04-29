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
image.src = 'https://felipewolmer.github.io/preloaderJSLottie/Animation.gif'; // Substitua pela URL direta da sua imagem GIF.
image.style.cssText = `
    width: 150px;
    height: 150px;
`;

document.body.appendChild(overlay);
overlay.appendChild(image);

function hideOverlay() {
    overlay.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    hideOverlay();
});

window.addEventListener('load', hideOverlay);
