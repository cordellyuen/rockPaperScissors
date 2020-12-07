    function computerPlay() {
        let computerChoice = Math.round(Math.random() * 3);

        if (computerChoice == 1) {
            return "rock";
        }

        else if (computerChoice == 2) {
            return "paper";
        }

        else {
            return "scissors";
        }
    }

    const buttons = document.querySelectorAll("button");
    const results = document.querySelector("#results");
    const score = document.querySelector("#score");

    buttons.forEach(addListener);

    function addListener(button) {
        button.addEventListener("click", (event) => playerPlay(button, event));
    }

    function playerPlay(button, event) {
        switch(button.id) {
            case "rock":
                results.textContent = playRound("rock");
            break;

            case "paper":
                results.textContent = playRound("paper");
            break;

            case "scissors":
                results.textContent = playRound("scissors");
            break;
        }
        updateScore(results.textContent);
    }

    function playRound(playerChoice) {
        let computerChoice = computerPlay();

        if(playerChoice === computerChoice) {
            return "tie game";
        }
        
        switch(playerChoice) {
            case "rock":
                if(computerChoice === "paper") {
                    return "you lose, paper beats rock";
                }
                else {
                    return "you win, rock beats scissors";
                }
            break;

            case "paper":
                if(computerChoice === "scissors") {
                    return "you lose, scissors beats paper";
                }
                else {
                    return "you win, paper beats rock";
                }
            break;

            case "scissors":
                if(computerChoice === "rock") {
                    return "you lose, rock beats scissors";
                }
                else {
                    return "you win, scissors beats paper";
                }
            break;
        }
    }

    let playerScore = 0;
    let compScore = 0;

    function updateScore(whoWon) {
        let winCondition = 5;

        if(whoWon.slice(0, 7) === "you win") {
            playerScore++;
        }
        if(whoWon.slice(0, 8) === "you lose") {
            compScore++;
        } 
        
        score.textContent = `player: ${playerScore} computer: ${compScore}`;

        if(playerScore > 4 || compScore > 4) {
            if(playerScore > compScore) {
                alert("PLAYER WINS");
            }
            else {
                alert("COMPUTER WINS");
            }

            playerScore = 0;
            compScore = 0;

            score.textContent = `player: ${playerScore} computer: ${compScore}`;
        }
    }