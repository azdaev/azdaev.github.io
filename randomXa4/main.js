button = document.querySelector('button')
vowels = 'а, у, о, ы, и, э, я, ю, ё, е'.split(', ')
consonants = 'б, в, г, д, ж, з, й, к, л, м, н, п, р, с, т, ф, х, ц, ч, ш, щ'.split(', ')
const pContainer = document.querySelector('.pContainer');

let generate = function () {
    pContainer.innerHTML = '';
    let result = '';
    let n = Math.floor(Math.random() * 2 + 4);
    let isVowels = Math.round(Math.random());
        while (n > 0) {
            n--;
            if (isVowels) {
                result += vowels[Math.floor(Math.random() * vowels.length)];
            } else {
                result += consonants[Math.floor(Math.random() * consonants.length)]
            }
            isVowels = !isVowels
        }
    let ending = Math.round(Math.random()) == 1 ? 'бек' : 'хан';
    console.log(ending);
    result = result[0].toUpperCase() + result.slice(1) + ending;
    if (result[0] == 'Ы' || result[0] == 'Ё'){
        result = result[1].toUpperCase() + result.slice(2);
    }
    let newRes = document.createElement('p')
    newRes.innerHTML = result
    console.log(newRes.innerHTML)
    pContainer.appendChild(newRes);
}

button.addEventListener('click', generate)