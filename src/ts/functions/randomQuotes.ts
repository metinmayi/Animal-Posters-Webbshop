import { quotes } from "../models/quotes";

export function randomQuotes() {
  let q1 = new quotes(
    "Bought the Depressed Dog for Michelle and she loved it!",
    "Barack Obama"
  );
  let q2 = new quotes("", "");
  let q3 = new quotes(
    "Herrrrrrrrrrrrrrrreguuuuuuuuddd, vilka otroliga posters!",
    "Björn Ranelid"
  );
  let q4 = new quotes(
    "These posters are even better than my paintings!",
    "Banksy"
  );
  let q5 = new quotes("", "");

  let quotesList = [];
  quotesList.push(q1, q2, q3, q4, q5);

  let randomFirstQuote = quotesList[Math.floor(Math.random() * 5)];

  let randomSecondQuote = quotesList[Math.floor(Math.random() * 5)];

  if (randomFirstQuote === randomSecondQuote) {
    randomSecondQuote = quotesList[Math.floor(Math.random() * 5)];
    console.log(randomSecondQuote);
    console.log(randomFirstQuote);

    createRandomQuotes();
  } else {
    createRandomQuotes();
  }

  function createRandomQuotes() {
    let createFirstQuote: HTMLParagraphElement = document.createElement("p");
    createFirstQuote.innerHTML = randomFirstQuote.quote;

    let createFirstName: HTMLParagraphElement = document.createElement("p");
    createFirstName.innerHTML = "-" + randomFirstQuote.name;

    let createSecondQuote: HTMLParagraphElement = document.createElement("p");
    createSecondQuote.innerHTML = randomSecondQuote.quote;

    let createSecondName: HTMLParagraphElement = document.createElement("p");
    createSecondName.innerHTML = "-" + randomSecondQuote.name;

    document.getElementById("first-quote").appendChild(createFirstQuote);
    document.getElementById("first-quote").appendChild(createFirstName);

    document.getElementById("second-quote").appendChild(createSecondQuote);
    document.getElementById("second-quote").appendChild(createSecondName);
  }
}
