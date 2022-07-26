const character = document.querySelector('.character');
const barrel = document.querySelector('.barrel');
const game = document.querySelector('.game');
const background = document.querySelector('.background');
const explosionSound = new Audio('./assets/sound/explosion-sound.mp3');

const jump = () => {
    character.classList.add('jump');
    setTimeout(() => {
        character.classList.remove('jump');
    }, 600);
}

const loop = setInterval(() => {
    const barrelPosition = barrel.offsetLeft;
    const charPosition = Number(window.getComputedStyle(character).bottom.replace('px', ''));
    const backgroundPosition = background.offsetLeft;

    if (barrelPosition < 180 && barrelPosition > 0 && charPosition < 100) {
        barrel.remove();
        character.src = '/assets/img/explosion.gif';

        setTimeout(() => {
            character.style.width = '600px';
            character.style.left = '-125px';
            character.style.bottom = '-100px';
        }, 120);

        character.style.animation = 'none';
        character.style.bottom = `${charPosition}px`;

        background.style.animation = 'none';
        background.style.left = `${backgroundPosition}px`;

        explosionSound.play();


        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);