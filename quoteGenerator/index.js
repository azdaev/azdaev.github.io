let quotes;
$.getJSON('https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json', function (data) {
    quotes = data;
});

const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    quote.style.opacity = "0.7";
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)].quoteText;
    let randomAuthor = quotes[Math.floor(Math.random() * quotes.length)].quoteAuthor;
    quote.innerText = randomQuote;
    if (randomAuthor){
        author.innerText = '- ' + randomAuthor
    };
})