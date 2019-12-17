const textInput = document.querySelector('#textField');
const numberInput = document.querySelector('#numberField');
const result = document.querySelector('#result');
const find = document.querySelector('#find');
let words;
let found = [];
let j = 0;
let syllables = ['а', 'и', 'о', 'у', 'я', 'ё', 'ю', 'ы', 'е', 'э'];



$.get('text.txt', function (data) {
    words = data.split(' ');
    words = words.map(a => a.split('').reverse().join(''))
    console.log(words);
}, "text");

find.addEventListener('click', () => {
    if (textInput.value && numberInput.value > 0){
        for (let i = Math.abs(Math.floor(Math.random() * (words.length) - 500)), k = i; (i < words.length - 1 && j < numberInput.value); i++) {
            if (textInput.value.split('').reverse().join('').substr(0, getSyllable(textInput.value)) == words[i].substr(0, getSyllable(textInput.value))){
                j++;
                found.push(words[i]);
                console.log(found);
            }
        }
    };
    result.innerHTML = '';
    result.innerHTML = found.map(a => a.split('').reverse().join('')).join(', ');
    j = 0;
    found = [];
})

let getSyllable = function(str){
    str = str.split('').reverse();
    for(let i = 1; i < str.length; i ++){
        if (syllables.includes(str[i])){
            return i + 1
        };
    }
}

