const text = document.querySelector('h1')
let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
text.textContent = `${hours<10?'0'+ hours : hours}:${minutes<10?'0'+minutes:minutes}:${seconds<10?'0'+seconds:seconds}`
const strText = text.textContent;
const splitText = strText.split('')
text.textContent = "";



for(let i = 0; i < splitText.length; i++){
    text.innerHTML += "<span class='first'>" + splitText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete()
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}

setInterval(() => {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    text.innerHTML = `<span>${hours<10?'0'+ hours : hours}</span><span>:</span><span>${minutes<10?'0'+minutes:minutes}</span><span>:</span><span>${seconds<10?'0'+seconds:seconds}</span>`;
}, 1000);

