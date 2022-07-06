
// document.querySelector("body").style.background = "url('images/image (' + $randomNumber + ').jpg')"
// $("body").css("background-image", "url('images/image ($).jpg')")



const quoteText = document.querySelector(".quote");
const authorText = document.querySelector(".author");

const twitterButton = document.querySelector(".twitter-btn");
const nextQuoteButton = document.querySelector(".next-quote-btn");
const quoteBox = document.querySelector(".quote-box");

const colors = [
    '#490A3D',
    '#BD1550',
    '#E97F02',
    '#F8CA00',
    '#8A9B0F',
    '#69D2E7',
    '#FA6900',
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#77B1A9',
    '#73A857',
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "green",
    "purple",
    "yellowgreen",
    "greenyellow",
    "magenta",
    "cyan",
    "aqua",
    "violet",
    "hotpink",
    "pink",
    "olive",
    "skyblue",
    "navy",
    "royalblue",
    "lime",
    "turquoise",
    "maroon"
];

// const mydata = JSON.parse(data);
// console.log(mydata.length);
// alert(mydata.length)



nextQuoteButton.addEventListener("click", function () {
    let data;
    let randomNumberColors;
    let randomNumberQuote;

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Do something with your data
            // console.log(data);
            const dataLength = data.length;
            randomNumberQuote = Math.floor(Math.random() * dataLength) + 1;
            console.log(randomNumberQuote);

            const colorsLength = colors.length;
            randomNumberColors = Math.floor(Math.random() * colorsLength) + 1;
            // console.log(randomNumberColors);
            // console.log(data[1]);
            // console.log(data);

            const quote = data[randomNumberQuote].text;
            // console.log(quote);
            const author = data[randomNumberQuote].author;
            const color = colors[randomNumberColors];

            quoteText.innerHTML = quote;
            authorText.innerHTML = "— " + author;

            document.querySelector("body").style.backgroundColor = color;
            twitterButton.style.backgroundColor = color;
            nextQuoteButton.style.backgroundColor = color;
            quoteBox.style.borderLeft = `10px solid ${color}`;
        });


});