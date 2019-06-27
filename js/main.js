const controls = document.querySelectorAll('[data-control]');
controls[1].addEventListener('click',play);
controls[2].addEventListener('click',pause);
controls[3].addEventListener('click',restart);
let i = 0;
let stopwatch;
function play(){
    stopwatch = setInterval(()=>{
        controls[0].innerText = i++;
    },100);
    controls[1].setAttribute('disabled','');
}
function pause(){
    clearInterval(stopwatch);
    controls[1].removeAttribute('disabled','');
}
function restart(){
    controls[0].innerText = 0;
    i=0;
}