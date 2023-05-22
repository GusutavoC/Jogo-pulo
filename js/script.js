const pipe = document.querySelector('.pipe');
const pikachu = document.querySelector('.pikachu');

const jump = () => {
    pikachu.classList.add('jump');

    setTimeout(() => {

        pikachu.classList.remove('jump');
    }, 500)
}
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && pikachuPosition < 60) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pikachu.style.animation = 'none';
        pikachu.style.bottom = `${pikachuPosition}px`;

        pikachu.src = 'images/imagems/pokebola.gif';
        pikachu.style.width = '40px'
        pikachu.style.marginLeft ='50px'
    }

}, 10)

document.addEventListener('keydown', jump);