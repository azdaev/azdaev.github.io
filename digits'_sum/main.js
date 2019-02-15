const input = document.querySelector('input');
const res = document.querySelector('.result');
let ab;
input.addEventListener('input', () => {
    let sum, arr;
    sum = 0;
    ab = Math.abs(+input.value);
    ab = ab.toString();
    arr = ab.split("");
    for (let n = 0; n < arr.length; n++){
        sum += +arr[n];
    }
    res.innerText = sum;
})