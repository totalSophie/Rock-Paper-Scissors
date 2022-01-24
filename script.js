/* // Creating a function computerPlay that randomly selects rock paper or scissors
function computerPlay(){
    let computer_choices = ['rock', 'paper', 'scissors'];
    let random_number = Math.floor(Math.random() * 3);
    let randomChoice = computer_choices[random_number];    
    return (randomChoice);
}


// function that takes parameters playerSelection, computerSelection and chooses who is the winner
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    //If you both choose the same thing, it is a tie
    if (computerSelection === 'rock' && playerSelection === 'rock'){
        return("It's a tie")
    }
    
    if (computerSelection === 'paper' && playerSelection === 'paper'){
        return("It's a tie")
    }

    if (computerSelection === 'scissors' && playerSelection === 'scissors'){
        return("It's a tie")
    }

    // Selection where you beat the computer
    if (computerSelection === 'rock' && playerSelection === 'paper'){
        return("You win")
    }
    if (computerSelection === 'paper' && playerSelection === 'scissors'){
        return("You win")
    }
    if (computerSelection === 'scissors' && playerSelection === 'rock'){
        return("You win")
    }

    //Selection where the computer beat you
    else{
        return ('You lose')
    }

}

// Creating a function that keeps score and reports a winner or loser at the end. 
function game(num){
    let playerCounter = 0;
    let computerCounter = 0;

    
    let playerSelection = compare_input();
    const computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);   
    console.log('your choice: ' + playerSelection);
    console.log('computer\'s choice: ' + computerSelection);
    console.log(result);

    if (result == 'You lose'){
        computerCounter = computerCounter + 1;
    }
    else if (result == 'You win'){
        playerCounter = playerCounter + 1;     
    }
    

    if (computerCounter > playerCounter){
        console.log('Sorry, You lose');
    }
    else if (playerCounter > computerCounter){
        console.log('Yaaayy, You win');
    }
    else{
        console.log('Well, you tied!')
    }
}

    // Function that checks to see if the input is either rock, papaer or scissors
// Function that checks to see if the input is either rock, papaer or scissors
function compare_input (){
    return player_input;
}

//play how many times?
game(3);
 */

let player_input ='';
let finalResult = '';
let playerCounter = 0;
let computerCounter = 0;

let choiceDisplay = document.querySelector('.my-choice')
let choices = document.querySelector('.choices')
let mine = document.querySelector('#mine')
let comps = document.querySelector('.comps')
let result_div = document.querySelector('.results')

//Creating images that'll identify user's choice
let rockImage = document.getElementById('rock-img')
let rock = document.createElement('img');
rock.src = ('./images/rock.jpg')
rock.style.width = ('80px')
rock.style.height = ('80px')

//Creating rock images that'll identify computer's choice
let rock_comps = document.createElement('img');
rock_comps.src = ('./images/rock.jpg')
rock_comps.style.width = ('80px')
rock_comps.style.height = ('80px')

//Creating paper images that'll identify user's choice
let paperImage = document.getElementById('paper-img')
let paper = document.createElement('img');
paper.src = ('./images/paper.jpg')
paper.style.width = ('80px')
paper.style.height = ('80px')

//Creating paper images that'll identify computer's choice
let paper_comps = document.createElement('img');
paper_comps.src = ('./images/paper.jpg')
paper_comps.style.width = ('80px')
paper_comps.style.height = ('80px')

//Creating scissors images that'll identify user's choice
let scissorsImage = document.getElementById('scissors-img')
let scissors = document.createElement('img');
scissors.src = ('./images/scissors.jpg')
scissors.style.width = ('80px')
scissors.style.height = ('80px')

//Creating scissors images that'll identify computer's choice
let scissors_comps = document.createElement('img');
scissors_comps.src = ('./images/scissors.jpg')
scissors_comps.style.width = ('80px')
scissors_comps.style.height = ('80px')

rockImage.addEventListener("click", changeDisplay)
paperImage.addEventListener("click", changeDisplay)
scissorsImage.addEventListener("click", changeDisplay)

let mouse_click = 0;
function changeDisplay(e){
    
    
    if (mouse_click < 5){

        if (e.target.id == 'rock-img'){ 
            mine.replaceChildren(rock)
            player_input = 'rock';
        }

        if (e.target.id == 'paper-img'){
            mine.replaceChildren(paper)
            player_input = 'paper';
        }

        if (e.target.id == 'scissors-img'){
            mine.replaceChildren(scissors)
            player_input = 'scissors';
        }
        mouse_click += 1;
        
        computerPlay()
        playRound()
        game()
        return player_input
    }
    
    //After the fifth click, disable any more clicks
    else{
        e.preventDefault
        let final_text = document.createElement('h3')
        final_text.textContent = finalResult;
        result_div.replaceChildren(final_text)

    }
    
}

function computerPlay(){
    let computer_choices = ['rock', 'paper', 'scissors'];
    let random_number = Math.floor(Math.random() * 3);
    let randomChoice = computer_choices[random_number]; 
    
    if (randomChoice == 'rock'){
        comps.replaceChildren(rock_comps)
        
    }
    else if (randomChoice =='paper'){
        comps.replaceChildren(paper_comps)
        
    }
    else {
        comps.replaceChildren(scissors_comps)
        
    }
    return (randomChoice);
}



// function that takes parameters playerSelection, computerSelection and chooses who is the winner
function playRound(playerSelection, computerSelection){
    playerSelection = player_input;
    

    //If you both choose the same thing, it is a tie
    if (computerSelection === 'rock' && playerSelection === 'rock'){
        return("It's a tie")
    }
    
    if (computerSelection === 'paper' && playerSelection === 'paper'){
        return("It's a tie")
    }

    if (computerSelection === 'scissors' && playerSelection === 'scissors'){
        return("It's a tie")
    }

    // Selection where you beat the computer
    if (computerSelection === 'rock' && playerSelection === 'paper'){
        return("You win")
    }
    if (computerSelection === 'paper' && playerSelection === 'scissors'){
        return("You win")
    }
    if (computerSelection === 'scissors' && playerSelection === 'rock'){
        return("You win")
    }

    //Selection where the computer beat you
    else{
        return ('You lose')
    }

}

// Creating a function that keeps score and reports a winner or loser at the end. 
function game(){
    
    

    let playerSelection = compare_input();
    const computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);

    let result_text = document.createElement('p')
    result_text.textContent = result;
    result_div.replaceChildren(result_text)
    
    console.log(result);

    if (result == 'You lose'){
        computerCounter = computerCounter + 1;
    }
    else if (result == 'You win'){
        playerCounter = playerCounter + 1;     
    }
    
    console.log('player ' + playerCounter)
    console.log('comp ' + computerCounter)
    console.log('brrr')
    

    // Checking the counter
    if (computerCounter > playerCounter){
        finalResult = 'Sorry, You lose'
        console.log('Sorry, You lose');
    }
    else if (playerCounter > computerCounter){
        finalResult = 'Yaaayy, You win'
        console.log('Yaaayy, You win');
    }
    else{
        finalResult = 'Issa draw'
        console.log('Well, you tied!')
    }
    
    return finalResult;
}

function afterGame(){
    
}
    // Function that checks to see if the input is either rock, papaer or scissors
// Function that checks to see if the input is either rock, papaer or scissors
function compare_input (){
    return player_input;
}

//play how many times?
//game(3);


