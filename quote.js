let quotes = [
 {
    quote:"The future belongs to those who believe in the beauty of their dreams.",
    author:"Eleanor Roosevelt"

 },
 
 {
    quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author:"Winston Churchill"

},

 {
    quote:"In the middle of every difficulty lies opportunity.",
    author:"Albert Einstein"
 },

  {
    quote:"Believe you can and you're halfway there.",
    author:"Theodore Roosevelt"
  },

  {
    quote:"It always seems impossible until it’s done.",
    author:"Nelson Mandela"
  },

  {
    quote:"Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    author:"Dr. APJ Abdul Kalam"
  },

  {
    quote:"You must be the change you wish to see in the world.",
    author:"Mahatma Gandhi"
  },

  {
    quote:"Do not wait for the perfect moment, take the moment and make it perfect.",
    author:"Zoey Sayward"
  },

  {
    quote:"Education is the most powerful weapon which you can use to change the world.",
    author:"Nelson Mandela"
  },

  {
    quote:"Confidence comes not from always being right but from not fearing to be wrong.",
    author:"Peter T. Mcintyre"
  }
];


function generateQuote(){
    let randomIndex = Math.floor(Math.
        random() * quotes.length);
        let randomQuote = quotes
        [randomIndex];

        document.getElementById("quote").
        textContent = randomQuote.quote;

        document.getElementById("author").
        textContent = "-" +
        randomQuote.author;
}

generateQuote();


