let span = document.querySelector('h1')
let text = ''

for (let i = 0; i < span.innerText.length; i++) {
    text += `<span>${span.innerText[i]}</span>`
}

span.innerHTML = text

let randomColor = function () {
    let abc = '0123456789ABCDEF'
    let color = '#'
    for (let j = 0; j < 6; j++) {
        color += abc[Math.round(Math.random() * abc.length)]
    }
    return color
}

setInterval(() => {
    span.childNodes.forEach((el) => {
        el.style.color = randomColor()
    })
}, 500)