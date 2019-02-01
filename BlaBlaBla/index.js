const container = document.querySelector('.container');
const button    = document.querySelector('button');
const inField   = document.querySelector('#in');
const outField  = document.querySelector('#out');
let text = [];
let result = [];
button.addEventListener('click', () => {
    outField.innerText = " ";
    result = [];
    console.log(1);
    if (inField.value) {
        container.style.display = "grid";
        outField.style.display = "block";
        text = inField.value.split(" ");
        for (let n = 0; n < text.length; n++){
            if (text[n].length >=4) {
                text[n] = replace(text[n]); 
            }
        result.push(text[n]);
        }
        outField.innerText = result.join(' ');
    }
});

function replace(a) {
    let arr = a.substr(1, a.length - 2).split("");
    let b = (a.charAt(0) + _.shuffle(arr).join("") + a.charAt(a.length - 1));
    return b;
}