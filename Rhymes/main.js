const endingField = document.querySelector("#rhyme");
const amountField = document.querySelector("#amount");
const button = document.querySelector("#btn");
const result = document.querySelector("#result");
const resultContainer = document.querySelector("#resCont");
const LOUD = ["Б", "В", "Г", "Д", "Ж", "З"];
const QUIET = ["П", "Ф", "К", "Т", "Ш", "С"];
let matchingWords;
let finalWords = [];
let reversedValue;
let reversedWord;
// const words = ["галаур", "амбар", ""];

button.addEventListener('click', () => {
    matchingWords = [];
    finalWords = [];
    console.log("clicked");
    // input reversed
    reversedValue = endingField.value.split("").reverse().join("");
    // search for endings (val <2 is too small)
    if (endingField.value.length >= 2) {
        for (var d = 0; d < words.length; d++) {
            // reverse word[d]
            reversedWord = words[d].split("").reverse().join("").toUpperCase();
            if (reversedValue.toUpperCase() == reversedWord.substr(0, reversedValue.length).toUpperCase() || (QUIET[LOUD.indexOf(reversedValue.charAt(0).toUpperCase())] == reversedWord.charAt(0).toUpperCase() && reversedValue.substr(1).toUpperCase() == reversedWord.substr(1, reversedValue.length - 1).toUpperCase()) || (LOUD[QUIET.indexOf(reversedValue.charAt(0).toUpperCase())] == reversedWord.charAt(0).toUpperCase() && reversedValue.substr(1).toUpperCase() == reversedWord.substr(1, reversedValue.length - 1).toUpperCase())) {
                resultContainer.style.display = "block";
                matchingWords.push(words[d]);
                matchingWords = _.uniq(matchingWords);
                if (matchingWords.length <= parseInt(amountField.value)) {
                    for (let n = 0; n <= parseInt(amountField.value); n++) {
                        finalWords.push(matchingWords[Math.floor(Math.random() * matchingWords.length)]);
                        finalWords = _.uniq(finalWords);
                    }
                }
                // put results to paragraph
                result.innerHTML = finalWords.join(', ');
            }
        }
    }
})

// ввод окончания
// пройтись по массиву и найти совпадения в окончании включая парные
// сделать из этого новый массив
// вывести определенное значение рандомных
// input.addEventListener('input', () => {
//   // clear result when no rhymes
//   result.innerText = "";
//   // reverse input
//   let value = input.value.split("").reverse().join("");
//   // length of input value
//   let length = value.length;
//   if (length >= 2 && amField.value != "") {
//     // search rhyme in every word of array
//     for (var d = 0; d < words.length; d += words.length / Math.floor(amField.value)) {
//       // reverse words
//       console.log(words[d]);
//       let reversed = words[d].split("").reverse().join("");
//       if (value == reversed.substr(0, length)) {
//         amount++;
//         result.innerText += (" " + words[d] + ",");
//       } else if (QUIET[LOUD.indexOf(value.charAt(0).toUpperCase())] == reversed.charAt(0).toUpperCase() && value.substr(1).toUpperCase() == reversed.substr(1, length - 1).toUpperCase()) {
//         amount++;
//         result.innerText += (" " + words[d] + ",");
//       } else if (LOUD[QUIET.indexOf(value.charAt(0).toUpperCase())] == reversed.charAt(0).toUpperCase() && value.substr(1).toUpperCase() == reversed.substr(1, length - 1).toUpperCase()) {
//         amount++;
//         result.innerText += (" " + words[d] + ",");
//       }
//       if (!value) {
//         result.innerText = "";
//       }
//     }
//   }
// })