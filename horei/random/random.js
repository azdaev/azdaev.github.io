let poemAuthor = document.querySelector("#poemAuthor")
let poemName = document.querySelector("#poemName")
let poemText = document.querySelector("#poemText")

document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
        .then(response => response.json())
        .then(json => {
            let poems = json.poems;
            let x = Math.floor(Math.random() * poems.length)
            poemAuthor.innerText = poems[x][0]
            poemName.innerText = poems[x][1]
            poemText.innerHTML = poems[x][2]
        });
});