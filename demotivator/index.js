let upperInput = document.querySelector('#upperText')
let lowerInput = document.querySelector('#lowerText')
let upperText = document.querySelector('#upper_meme_text')
let lowerText = document.querySelector('#lower_meme_text')
let fileInput = document.querySelector('input[type=file]')
let img = document.querySelector('img')
let button = document.querySelector('button')

upperInput.addEventListener('input', () => {
  upperText.innerText = upperInput.value
})

lowerInput.addEventListener('input', () => {
  lowerText.innerText = lowerInput.value
})

fileInput.addEventListener('change', (event) => {
  img.src = window.URL.createObjectURL(event.target.files[0]);
})

button.addEventListener('click', () => {
    html2canvas(document.querySelector("#meme_picture"), {allowTaint : true}).then(canvas => {
    let dataURL = canvas.toDataURL()
    myImage = document.createElement('img')
    myImage.src = dataURL
    document.body.innerHTML = '';
    document.body.appendChild(myImage)
  })
})
