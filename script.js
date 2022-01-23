// Creating a function computerPlay that randomly selects rock paper or scissors
function computerPlay(){
    let computer_choices = ['rock', 'paper', 'scissors'];
    let random_number = Math.floor(Math.random() * 3);
    
    return (computer_choices[random_number]);
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
function compare_input (){
    let player_input = prompt('What is your weapon?');
    player_input = player_input.toLowerCase();
    let weapons = ['rock', 'paper', 'scissors'];


    //if not.. reprompt till you get right answer
    while (weapons.indexOf(player_input) < 0 ) //If the user number matches one of preset numbers
    {
        let player_input = prompt('What is your weapon?');
    } 
    return player_input;
}

//play how many times?
game(3);