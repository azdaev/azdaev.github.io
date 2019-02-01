const inputField = document.querySelector('.input');
const goButton = document.querySelector('.goButton')
const resetButton = document.querySelector('.resetButton')
const p = document.querySelector('.result');
const hr = document.querySelector('hr');

function findFactorial(num) {
  for (res = 1, i=1; i<=num; i++) {
    res = res * i;
  };
  return res;
}

goButton.addEventListener('click', function(){
  if (inputField.value != "") {
    hr.style.display = "block";
    p.innerText = findFactorial(inputField.value);
  } else {
    p.innerText = "Type a number";
  }
});

resetButton.addEventListener('click', () => {
  inputField.value = "";
  p.innerText = "";
  hr.style.display = "none";
});
