let button = document.getElementsByClassName("choice")

button = Array.from(button)

let userChoice,userScore = 0
let computerScore = 0

document.querySelector('#resetGame').addEventListener('click',restartGame)

button.forEach(btn => {
    btn.addEventListener('click',function(){
        userChoice = btn.innerHTML

        console.log(userChoice)
        computerChoice = getComputerChoice()
        console.log(computerChoice)

        result = calculateResult(userChoice,computerChoice)

        if(computerScore == 5){
            console.log(`Computer Wins with the final score of ${computerScore} - ${userScore}!`)
            restartGame()
        }else if(userScore == 5){
            console.log(`User Wins with the final score of ${userScore} - ${computerScore}!`)
            restartGame()
        }
    })
})        

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3)
    switch(computerChoice){
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
    return computerChoice
}

function calculateResult(userChoice,computerChoice){
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

function restartGame(){
    userScore = 0
    computerScore = 0
    console.log("........")
    console.log("Game resetted")
    console.log(`Score is Computer ${computerScore} - ${userScore} User`)
}