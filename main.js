let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    switch(choice){
        case 0:
            computerChoice = "Rock"
            break
        case 1:
            computerChoice = "Paper"
            break
        case 2:
            computerChoice = "Scissor"
            break
    }
}
function getPlayerChoice(){
    resp = prompt("Choose between Rock, Paper & Scissor")
    resp = resp.toLowerCase()
    userChoice = resp.charAt(0).toUpperCase() + resp.slice(1)
    console.log(userChoice)

    if(userChoice != "Rock" && userChoice != "Paper" && userChoice != "Scissor"){
        alert("Incorrect Input! Check for typo.")
        getPlayerChoice()
    }
}

function game(){
    while(computerScore < 5 && userScore < 5){
        getComputerChoice()
        getPlayerChoice()
        switch(userChoice){
            case "Rock":
                if(computerChoice == "Rock"){
                    console.log("Computer also chose Rock. Tied! Try Again")
                }else if(computerChoice == "Paper"){
                    console.log("Computer chose Paper. You Lose!")
                    computerScore += 1
                }else{
                    console.log("Computer chose Scissor. You Win!")
                    userScore += 1
                }
                break
            case "Paper":
                if(computerChoice == "Rock"){
                    console.log("Computer chose Rock. You Win!")
                    userScore += 1
                }else if(computerChoice == "Paper"){
                    console.log("Computer chose Paper. Tied! Try Again")
                }else{
                    console.log("Computer chose Scissor. You Lose!")
                    computerScore += 1
                }
                break
            case "Scissor":
                if(computerChoice == "Rock"){
                    console.log("Computer also chose Rock. You Lose!")
                    computerScore += 1
                }else if(computerChoice == "Paper"){
                    console.log("Computer chose Paper. You Win!")
                    userScore += 1
                }else{
                    console.log("Computer chose Scissor. Tied! Try Again")
                }
                break
        }
        console.log(`Score is Computer ${computerScore} - ${userScore} User`)
    }
    if(computerScore > userScore){
        console.log(`Computer Wins with the final score of ${computerScore} - ${userScore}!`)
    }else{
        console.log(`User Wins with the final score of ${userScore} - ${computerScore}!`)
    }
}