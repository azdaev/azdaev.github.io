let keyDiv = document.querySelector('.key')
let errors = 0
let errorsEl = document.querySelector('#errors')
let accuracyEl = document.querySelector('#accuracy');
let speedEl = document.querySelector('#speed');
let h1 = document.querySelector('h1');
let clicks = 0
let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const button = document.querySelector('button');

let randomChar = function(){
    return characters[Math.floor(Math.random() * characters.length)]
}

let handler = (e) => {
    clicks++;
    console.log(e.key);
    if (e.key.toLowerCase() == keyDiv.innerHTML.toLowerCase()){
        let newKey = randomChar();
        while (keyDiv.innerHTML.toLowerCase() == newKey){
            newKey = randomChar();
        }
        keyDiv.innerHTML = newKey.toUpperCase();
    } else {
        errors++;
    }
}

let play = function(){
    clicks = 0;
    errors = 0;
    keyDiv.innerHTML = randomChar().toUpperCase()
    errorsEl.style.display = 'none';
    accuracyEl.style.display = 'none';
    speedEl.style.display = 'none';
    h1.style.display = 'none';
    button.style.display = 'none';
    document.addEventListener('keydown', handler)
    setTimeout(() => {
        document.removeEventListener('keydown', handler)
        errorsEl.style.display = 'block';
        errorsEl.innerText = `Errors: ${errors}`;
        accuracyEl.style.display = 'block';
        accuracyEl.innerText = `Accuracy: ${Math.round(((clicks-errors)/clicks * 100))}%`;
        speedEl.style.display = 'block';
        speedEl.innerText = `${Math.round(clicks/60 * 100) / 100} clicks/sec`;
        h1.style.display = 'block';
        button.style.display = 'block';
    }, 60000);

}

play();

button.addEventListener('click', play)

