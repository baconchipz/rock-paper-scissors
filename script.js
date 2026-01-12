        function getComputerChoice(){
            const choices = ['rock', 'paper', 'scissors'];
            const randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex];
        }
        function getHumanChoice(){
            let userInput = prompt("Input rock, paper or scissors:").toLowerCase();
            while (!['rock', 'paper', 'scissors'].includes(userInput)){
                userInput = prompt("Invalid input. Please enter rock, paper, or scissors:").toLowerCase();
            }
            return userInput;
        }
        let humanScore = 0;
        let computerScore = 0;
        function playRound(humanChoice, computerChoice){
            if (humanChoice === computerChoice){
                console.log("It's a tie! human: " + humanChoice + ", computer: " + computerChoice + " score: " + humanScore + "-" + computerScore);
            }
            else if (
                (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")
            ){
                humanScore++;
                document.getElementById('player-score').textContent = humanScore; //update element in play round
                console.log("You win!" + "human: " + humanChoice + ", computer: " + computerChoice + "score: " + humanScore + "-" + computerScore);
                gameEnd();
            }
            else{
                computerScore++;
                document.getElementById('computer-score').textContent = computerScore;
                console.log("You lose!" + "human: " + humanChoice + ", computer: " + computerChoice + " score: " + humanScore + "-" + computerScore);
                gameEnd();
            }
        }
        document.getElementById('scissors').addEventListener('click', function() { // make sure to retrieve the element by its ID
            playRound('scissors', getComputerChoice());
        });
        document.getElementById('rock').addEventListener('click', function() {
            playRound('rock', getComputerChoice());
        });
        document.getElementById('paper').addEventListener('click', function() {
            playRound('paper', getComputerChoice());
        });

        function gameEnd(){
            if (humanScore === 5 || computerScore === 5){
                const resultDisplay = document.getElementById('result-display');
                if (humanScore === 5){
                    console.log("Congratulations! You won the game!");
                    resultDisplay.textContent = "Congratulations! You won the game!"
                    resultDisplay.style.color = "green";
                } else {
                    console.log("Game over! The computer won the game!");
                    resultDisplay.textContent = "Game over! The computer won the game!";
                    resultDisplay.style.color = "red";
                }
                // Reset scores for a new game
                humanScore = 0;
                computerScore = 0;
                document.getElementById('player-score').textContent = humanScore;
                document.getElementById('computer-score').textContent = computerScore;
            }
        }

