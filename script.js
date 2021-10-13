// intial scores set to 0 for user and comp
let userScore = 0;
let compScore = 0;

//creating variable for all parts of the dom that are going to be updated
//actual score for you
const userScore_Span = document.getElementById('you_Score');
//actual score for comp
const compScore_Span = document.getElementById('comp_Score');
//div that holds score
const scoreBoard_Div = document.querySelector('.score_count');
//p tag that updates with the win lose tie text and the options selected
const result_Div = document.querySelector('.results > p')
// rock pic div selected by the id in the html page
const rock_Div = document.getElementById('r')
// paper pic div selected by the id in the html page
const paper_Div = document.getElementById('p')
// scissors pic div selected by the id in the html page
const scissors_Div = document.getElementById('s')
// lizard pic div selected by the id in the html page
const lizard_Div = document.getElementById('l')
// alien pic div selected by the id in the html page
const alien_Div = document.getElementById('a')


// grabs choice from array and returns a value that later converts to computer choice for random selection
function getCompChoice (){
  //array options to be converted to comp choices as a random choice
  const choices = ['r', 'p', 's', 'l', 'a']
  // generates num between 0 and 5 and equals a letter in the array
  const randomNum = Math.floor(Math.random() * 5);
  // console.log(randomNum)
  return choices[randomNum];
}

//changes the earlier selection into the actual word to be displayed on the page
function wordConverter(letter){
  // if letter equal to the array value or the onclick value changes it to the word 
  if(letter === 'r') return 'Rock';
  if(letter === 'p') return 'Paper';
  if(letter === 's') return 'Scissors';
  if(letter === 'l') return 'Lizard';
  return "Alien";

}

//adds a score to the you/win section and updates message on the page
function win(userSelect, computerSelect){
  // console.log('win')
  userScore++;
  // updates the score on page 
  userScore_Span.innerHTML = userScore;
  // updates the message on the page
  result_Div.innerHTML = wordConverter(userSelect) + ' ' + 'beats' + ' ' + wordConverter(computerSelect);
  
}

// adds a score to the comp/ lose win and updates the message
function lose(userSelect, computerSelect){
  // console.log('lose')
  compScore++;
  // updates the score on page 
  compScore_Span.innerHTML = compScore;
  // updates the message on the page
  result_Div.innerHTML = wordConverter(userSelect) + ' ' + 'loses to' + ' ' + wordConverter(computerSelect);
}

// updates the message on the page to show a tie
function tie(userSelect, computerSelect){
  // console.log('tie')
  // updates the message on the page
  result_Div.innerHTML = wordConverter(userSelect) + ' ' + 'ties with' + ' ' +  wordConverter(computerSelect);
}


// actual game logic to compare the user choice to the comp random select
function game(userChoice){
  // console.log(`clicked ${userChoice}`)
  getCompChoice()

  const computerChoice = getCompChoice();
  // console.log(computerChoice);

  switch(userChoice + computerChoice){
    // the options for winning as shown as the letters that you and the comp select to be compared later
    case 'rs':
    case 'rl':
    case 'sl':
    case 'sp':
    case 'pa':
    case 'pr':
    case 'la':
    case 'lp':
    case 'ar':
    case 'as':
      // console.log("you win")
      win(userChoice, computerChoice);
      break;
    // the options for losing as shown as the letters that you and the comp select to be compared later
    case 'rp':
    case 'ra':
    case 'ps':
    case 'pl':
    case 'sa':
    case 'sr':
    case 'lr':
    case 'ls':
    case 'al':
    case 'ap':
      // console.log('you lost')
      lose(userChoice, computerChoice);
      break;
    // the options for a tie to be compared later  
    case 'rr':
    case 'll':
    case 'ss':
    case 'pp':
    case 'aa':
      // console.log('its a tie')
      tie(userChoice, computerChoice)
      break;
  }
}


//function that adds onClick event listeners to the each div with a picture and a function to assign a letter value to be compared to random comp choice
function main(){

  // rock option
  rock_Div.addEventListener('click', function(){
    game('r')
  });
  // paper option
  paper_Div.addEventListener('click', function(){
    game('p')
  });
  // scissors option
  scissors_Div.addEventListener('click', function(){
    game('s')
  });
  //lizard option
  lizard_Div.addEventListener('click', function(){
    game('l')
  });
  // alien option
  alien_Div.addEventListener('click', function(){
    game('a')
  });
  

}

main()