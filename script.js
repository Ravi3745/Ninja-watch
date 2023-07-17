const display=document.querySelector('.watch');

const startButton=document.getElementById('start');
const stopButton=document.getElementById('stop');
const resetButton=document.getElementById('reset');

// timer fucntion
let seconds=0;
let interval=null;

// evenlistner

startButton.addEventListener('click',start);
stopButton.addEventListener('click',stop);
resetButton.addEventListener('click',reset);
function timer(){
    
    seconds++;
    
    let hour=Math.floor(seconds/3600);
    let min=Math.floor((seconds-(hour*3600))/60);
    let sec=seconds%60;
    
    if(sec<10) sec='0'+sec;
    if(min<10) min='0'+min;
    if(hour<10) hour='0'+hour;
    
    display.innerText= `${hour} : ${min} : ${sec}`;

}




function start(){
    if(interval) return;

    interval=setInterval(timer,1000);
}

function stop(){
    clearInterval(interval);
    interval=null;
}

function reset(){
    stop();
    seconds=0;

    display.innerText=`00 : 00 : 00`;
    
}