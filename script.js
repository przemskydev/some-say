const button = document.querySelector(".quoteBtn");

const quotes = [
    'he has no understanding of queuing',
    'he’s wanted by the CIA, and that he sleeps upside down like a bat',
    'he can swim seven lengths under water, and he has webbed buttocks',
    'he knows two facts about ducks, and that both of them are wrong',
    'he never blinks, and that he roams around the woods at night foraging for wolves',
    'he lives in a tree, and that his sweat can be used to clean precious metals',
    'that his heart ticks like a watch, and that he’s confused by stairs',
    'that his voice can only be heard by cats, and that he has two sets of knees',
    'he isn’t machine washable, and all his potted plants are called Steve',
    'he thought Star Wars was a documentry'
];


const randomQuotes = (arr) => {
    arr = quotes;
    let num = Math.floor(Math.random()*10);
    let quote = document.querySelector('#quote').textContent = `...${arr[num]}`;
    return quote
}


button.addEventListener("click", randomQuotes)