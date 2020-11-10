let sieve = (n) => {
    let arr = new Array(n+1).fill(true)
    arr[0] = false
    arr[1] = false
    for (let i = 2; i <= Math.sqrt(n+1); i++){
        if (arr[i]){
            for (let j = 2*i; j < n+1; j += i){
                arr[j] = false
            }
        }
    }
    return arr
}

let n = document.querySelector('input')
let btn = document.querySelector('button')
let div = document.querySelector('.container')

btn.addEventListener('click', () => {
    div.innerHTML = `<p id='prime'>Prime</p>
        <p id='non-prime'>Non-prime</p>`
    
    let arr = sieve(+n.value)
    for (let i = 1; i < arr.length; i++){
        let newEl = document.createElement('span')
        newEl.innerHTML = i
        if (arr[i]){
            newEl.classList.add('prime')
        }
        div.appendChild(newEl)
    }
})

