const mario = document.querySelector('.mario'); // constante para acessar o codigo css e pegar uma classe
const pipe = document.querySelector('.pipe');
const nuvem = document.querySelector('.nuvens');
const pular =()=>{
mario.classList.add('pular')// le a lista de classe e adiciona uma nova classe ao elemento
setTimeout(() =>{// timeout recebe 2 parametros uma função e um tempo de execução dela
mario.classList.remove('pular');
},500);
}

const loop = setInterval(()=> {// igual o settimout estou parando a animação ao encostar no pipe
 const pipeposição = pipe.offsetLeft;
 const posicaomario = +window.getComputedStyle(mario).bottom.replace('px', '')
 const posicaonuvem = nuvem.offsetLeft;

 if (pipeposição <=120 && pipeposição > 0 &&posicaomario <80)
 {// 120 ee a posição em que mario encosta no pipe
     pipe.style.animation ='nome';
     pipe.style.left =`${pipeposição}px`;
 
     mario.style.animation ='nome';
     mario.style.bottom =`${posicaomario}px`;

     nuvem.style.animation ='nome';
     nuvem.style.left = `${posicaonuvem}px`;

     mario.src = './imagens/game-over.png';
     mario.style.width = '90px';
     mario.style.marginLeft='56px';
     
     clearInterval(loop);
 }
}, 10)
document.addEventListener('keydown', pular);