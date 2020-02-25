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
    'he thought Star Wars was a documentry',
    'he never blinks, and that he roams around the woods at night foraging for wolves',
    'that his favourite flower is the potato, and that even though he’s seen Fifty Shades of Grey he still thinks BDSM is a driving school',
    'that his favourite football formation is 8-8-19, and his hair is the exact same shape as a hat',
    'he has 50,000 photographs of his own camera, and that 60 years ago this week, he too became a Queen',
    'that in his wallet he keeps a photograph of his wallet, and that in a recent race even he was beaten by the King’s speech',
    'that he’s seen The Lion King 1,780 times, and that his second best friend is a Cape Buffalo',
    'that he sucks the moisture from ducks, and that his crash helmet is modeled on Britney Spears’ head',
    'that his first name really is “The”, and that if he went on Celebrity Love Island they’d all be pregnant, including the camera men',
    'that on really warm days he sheds his skin like a snake, and that for some reason he’s allergic to the Dutch',
    'that the outline of his left nipple is exactly the same shape as the Nurburgring, and if you give him a really important job to do, he’ll skive off and play croquet',
    'that his genitals are on upside down, and that if he could be bothered he could crack the da vinci code in 43 seconds',
    'that his heart is in upside down, and that his teeth glow in the dark',
    'that he has no understanding of clouds, and that his ear wax tastes like Turkish Delight',
    'say his skin has the texture of a dolphin’s, and that he’s terrified of ducks',
    'that his ears aren’t exactly where you’d expect them to be'
];


const randomQuotes = (arr) => {

    arr = quotes;
    let num = Math.floor(Math.random()*quotes.length);

    console.log(num)
    let quote = document.querySelector('#quote').textContent = `...${arr[num]}`;

    return quote
}


button.addEventListener("click", randomQuotes)