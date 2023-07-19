let button = document.getElementsByClassName("choice")
let update = document.querySelector('span')

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
            document.querySelector('h1').innerHTML = (`Computer Wins with the final score of ${computerScore} - ${userScore}!`)
            restartGame()
        }else if(userScore == 5){
            document.querySelector('h1').innerHTML = console.log(`User Wins with the final score of ${userScore} - ${computerScore}!`)
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
                update.innerHTML = ("Computer also chose Rock. Tied! Try Again")
            }else if(computerChoice == "Paper"){
                update.innerHTML = ("Computer chose Paper. You Lose!")
                computerScore += 1
            }else{
                update.innerHTML = ("Computer chose Scissor. You Win!")
                userScore += 1
            }
            break
        case "Paper":
            if(computerChoice == "Rock"){
                update.innerHTML = ("Computer chose Rock. You Win!")
                userScore += 1
            }else if(computerChoice == "Paper"){
                update.innerHTML = ("Computer chose Paper. Tied! Try Again")
            }else{
                update.innerHTML = ("Computer chose Scissor. You Lose!")
                computerScore += 1
            }
            break
        case "Scissor":
            if(computerChoice == "Rock"){
                update.innerHTML = ("Computer also chose Rock. You Lose!")
                computerScore += 1
            }else if(computerChoice == "Paper"){
                update.innerHTML = ("Computer chose Paper. You Win!")
                userScore += 1
            }else{
                update.innerHTML = ("Computer chose Scissor. Tied! Try Again")
            }
            break
    }
    document.querySelector('p').innerHTML = (`Score is Computer ${computerScore} - ${userScore} User`)
}

function restartGame(){
    userScore = 0
    computerScore = 0
    document.querySelector('h2').innerHTML = ("Game resetted")
    document.querySelector('p').innerHTML = (`Score is Computer ${computerScore} - ${userScore} User`)
    document.querySelector('span').innerHTML = ""
}