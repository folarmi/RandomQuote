const quotes = [
    {
        Author: "Bernard M. Baruch", 
        quote:  "Be who you are and say what you feel, because those who mind don’t matter, and those who matter don’t mind"
    },
    {
        Author: "Oscar Wilde", 
        quote:  "Be yourself; everyone else is already taken."
    },
    {
        Author: "Albert Camus", 
        quote:  "Don’t walk behind me; I may not lead. Don’t walk in front of me; I may not follow. Just walk beside me and be my friend."
    },
    {
        Author: "Eleanor Roosevelt", 
        quote:  "No one can make you feel inferior without your consent."
    },
    {
        Author: " George Bernard Shaw", 
        quote:  "Imagination is the beginning of creation. You imagine what you desire; you will what you imagine; and at last you create what you will."
    },
    {
        Author: "Henry David Thoreau", 
        quote:  "Success usually comes to those who are too busy to be looking for it"
    },
    {
        Author: "Maya Angelou", 
        quote:  "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
    },
    {
        Author: "Unknown", 
        quote:  "It’s not who you are that holds you back, it’s who you think you’re not"
    },
    {
        Author: "Aristotle", 
        quote:  "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
    },
    {
        Author: " Zig Ziglar", 
        quote:  "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily."
    },
    {
        Author: " Theodore Roosevelt", 
        quote:  "It is hard to fail but it is worse never to have tried to succeed."
    },
    {
        Author: " C.S. Lewis", 
        quote:  "Friendship is born at that moment when one person says to another: “What! You too? I thought I was the only one."
    },
    {
        Author: " Oscar Wilde", 
        quote:  "To live is the rarest thing in the world. Most people exist, that is all."
    },
    {
        Author: " Dale Carnegie", 
        quote:  "Remember, happiness doesn’t depend upon who you are or what you have, it depends solely upon what you think."
    },
    {
        Author: " Thomas A. Edison", 
        quote:  "I have not failed. I’ve just found 10,000 ways that won’t work."
    },
    {
        Author: " Dr. Seuss", 
        quote:  "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living."
    },
    {
        Author: "Theodore Roosevelt", 
        quote:  "The only man who never makes mistakes is the man who never does anything."
    },
    {
        Author: " Oliver Wendell Holmes, Jr", 
        quote:  "Man’s mind, once stretched by a new idea, never regains its original dimensions."
    },
    {
        Author: " Friedrich Nietzsche", 
        quote:  "It is not a lack of love, but a lack of friendship that makes unhappy marriages."
    },
    {
        Author: " Marilyn Monroe", 
        quote:  "Imperfection is beauty, madness is genius and it’s better to be absolutely ridiculous than absolutely boring.."
    },
    {
        Author: " J.K. Rowling", 
        quote:  "It does not do to dwell on dreams and forget to live."
    },
    {
        Author: " Albert Einstein", 
        quote:  "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."
    },
    {
        Author: "Malcolm X", 
        quote:  "If you don’t stand for something you will fall for anything."
    },
    {
        Author: "Bil Keane", 
        quote:  "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present."
    },
    {
        Author: " Mark Twain", 
        quote:  "Whenever you find yourself on the side of the majority, it is time to pause and reflect."
    },
]


const quoteGenerator = document.getElementById("generateQuote");
const theQuote = document.getElementById("quote-body");
const theAuthor = document.getElementById("author");
console.log(quoteGenerator)
quoteGenerator.addEventListener("click",changeQuote);


function changeQuote () {
    let quoteNumber = Math.floor(Math.random() * quotes.length + 1);
    theQuote.textContent =  quotes[quoteNumber].quote;
    theAuthor.textContent = "-" + quotes[quoteNumber].Author;
}