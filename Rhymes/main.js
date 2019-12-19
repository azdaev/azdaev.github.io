const textInput = document.querySelector('#textField');
const numberInput = document.querySelector('#numberField');
const result = document.querySelector('#result');
const find = document.querySelector('#find');
let words;
let found = [];
let j = 0;
let syllables = ['а', 'и', 'о', 'у', 'я', 'ё', 'ю', 'ы', 'е', 'э'];
let attempts = 0;

$.get('text.txt', function (data) {
    words = data.split(' ');
    words = words.map(a => a.split('').reverse().join(''))
    console.log(words);
}, "text");

find.addEventListener('click', () => {
    if (textInput.value && numberInput.value > 0) {
        textLength = getSyllable(textInput.value);
        let reversedPartOfInput = textInput.value.split('').reverse().join('').substr(0, textLength);
        while (attempts < 100) {
            for (let i = Math.abs(Math.floor(Math.random() * (words.length) - 500));
                (i < words.length - 1 && j < numberInput.value); i++) {
                let reversedPartOfWord = words[i].substr(0, textLength); //Последний слог слова из массива
                if (reversedPartOfInput == reversedPartOfWord && !found.includes(words[i]) && words[i].split("").reverse().join('') != textInput.value) {
                    j++;
                    found.push(words[i]);
                    console.log(found + " " + j);
                }
            }
            attempts++;
            console.log(attempts);
        }
        attempts = 0;
    };
    result.innerHTML = '';
    result.innerHTML = found.map(a => a.split('').reverse().join('')).join(', ');
    j = 0;
    found = [];
})

let getSyllable = function (str) {
    str = str.split('').reverse();
    if (str.join('').startsWith("он")){
        return 2;
    }
    for (let i = 1; i < str.length; i++) {
        if (syllables.includes(str[i])) {
            console.log("LOOLOL " + i);
            if (i == 2){
                return 3;
            }

            if (i == 1){
                return 2;
            }
            
            if (i == 3){
                return 3;
            }
            
            return i - 1;
        };
    }
}