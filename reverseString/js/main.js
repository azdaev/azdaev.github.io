const input   = document.getElementById('input');
const p       = document.getElementById('resText');
const button  = document.getElementById('button');
const copy    = document.getElementById('copyButton');
const heading = document.getElementById('heading');

heading.addEventListener('click', () => {
  heading.innerText = heading.textContent.split("").reverse().join("");
});

button.addEventListener('click', () =>
  p.innerText = input.value.split("").reverse().join(""));


copy.addEventListener('click', function () {
  p.select();
  document.execCommand('copy');
  this.innerText = "Copied"
});
