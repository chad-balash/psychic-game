

    let winCount = 0;
    let lossesCount = 0;
    let turns = 9;
    let allUserGuesses = [];
    let computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    

    document.getElementById('wins').innerHTML = winCount;
    document.getElementById('losses').innerHTML = lossesCount;
    document.getElementById('guesses-left').innerHTML = turns;
    
   
    document.onkeyup = function(event) {
      let userGuess = event.key; 
      allUserGuesses.push(' ' + userGuess); 
      document.getElementById('guesses').innerHTML = (allUserGuesses);
      console.log('User Guess: ' + allUserGuesses);
      let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      console.log('Computer Guess: ' + computerGuess);
        if (userGuess === computerGuess) {
            winCount++;
            turns = 9;
            allUserGuesses.length = 0;
            alert('We have a winner! The correct letter was ' + computerGuess);
            document.getElementById('wins').innerHTML = winCount;
            document.getElementById('guesses').innerHTML = (allUserGuesses);
            document.getElementById('guesses-left').innerHTML = turns;
            console.log('User Wins: ' + winCount);
         } else if (turns === 1){
                lossesCount++;
                turns = 9;
                allUserGuesses.length = 0;
                alert('Game Over! Try again!');
                document.getElementById('losses').innerHTML = lossesCount;
                document.getElementById('guesses').innerHTML = (allUserGuesses);
                document.getElementById('guesses-left').innerHTML = turns;
                console.log('User Losses: ' + losses);
            }
            else if (userGuess !== computerGuess){
                turns--;
                document.getElementById('guesses-left').innerHTML = turns;
                console.log('Turns: ' + turns);
            }

    };