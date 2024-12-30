const redbtt = document.getElementById('redBtt')
const yellowBtt = document.getElementById('yellowBtt')
const greenBtt = document.getElementById('greenBtt')
const autBtt = document.getElementById('autBtt')

const semafaro = document.getElementById('semafaro')

function redOn(){
    semafaro.src = './img/vermelho.png'
}

function yellowOn(){
    semafaro.src = './img/amarelo.png'
}

function greenOn(){
    semafaro.src = './img/verde.png'
}

function autOn(){ 
    let current = 0; 
    const images = ['./img/vermelho.png', './img/amarelo.png', './img/verde.png']; 
    setInterval(() => { 
        semafaro.src = images[current]; current = (current + 1) % images.length; 
    }, 800)
};

redbtt.addEventListener("click", redOn)
yellowBtt.addEventListener("click", yellowOn)
greenBtt.addEventListener("click", greenOn)
autBtt.addEventListener("click", autOn)