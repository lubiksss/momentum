const quotes = [
    {
        quote: "Don't dwell on the past.",
        author: "jake"
    },
    {
        quote: "Believe in yourself.",
        author: "jake"
    },
    {
        quote: "Follow your heart.",
        author: "jake"
    },
    {
        quote: "Seize the day.",
        author: "jake"
    },
    {
        quote: "You only live once.",
        author: "jake"
    },
    {
        quote: "Past is just past.",
        author: "jake"
    },
    {
        quote: "Love yourself.",
        author: "jake"
    },
    {
        quote: "Where there is a will there is a way.",
        author: "Angela Merkel"
    },
    {
        quote: "Don't beat yourself up.",
        author: "jake"
    },
    {
        quote: "Life is a journey.",
        author: "Ralph Waldo Emerson"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author

