const choices = document.querySelectorAll(".light")
let declare = document.querySelector("#msg")
let decCon = document.querySelector(".result")
let uScore = document.querySelector("#user-score")
let pcScore = document.querySelector("#pc-score")
let compShow = document.querySelector(".main-box")
let userShow = document.querySelector(".main-box1")

let ranCompChoice = () => {
    let values = ["rock", "paper", "scissor"];
    let ridx = Math.floor(Math.random() * 3);
    return values[ridx];
}

let userScore = 0
let compScore = 0

function playGame (userChoice) {
    //game
    let compChoice = ranCompChoice();
    let youWin = false
    // computer output
    if(compChoice === 'rock') {
        compShow.classList.add('choice-rock')
        compShow.classList.remove('choice-paper')
        compShow.classList.remove('choice-scissors')
    }

    else if ( compChoice === 'paper') {
        compShow.classList.add('choice-paper')
        compShow.classList.remove('choice-rock')
        compShow.classList.remove('choice-scissors')
    }

    else if (compChoice === 'scissor') {
        compShow.classList.add('choice-scissors')
        compShow.classList.remove('choice-paper')
        compShow.classList.remove('choice-rock')
    }
    else{}

    if(userChoice === 'rock') {
        userShow.classList.add('choice-rock')
        userShow.classList.remove('choice-paper')
        userShow.classList.remove('choice-scissors')
    }

    else if ( userChoice === 'paper') {
        userShow.classList.add('choice-paper')
        userShow.classList.remove('choice-rock')
        userShow.classList.remove('choice-scissors')
    }

    else if (userChoice === 'scissor') {
        userShow.classList.add('choice-scissors')
        userShow.classList.remove('choice-paper')
        userShow.classList.remove('choice-rock')
    }
    else{}

    if (userChoice == compChoice){
        declare.innerText = "Game is Draw"
        declare.style.backgroundColor = "rgba(0,0, 0, 0.521)"
        decCon.style.backgroundColor = "rgba(0, 0, 0, 0.521)"
    }
    else {
        if (userChoice === "rock")
            youWin = compChoice === "paper" ? false : true;
        else if (userChoice === "paper")
            youWin = compChoice === "scissor" ? false : true;
        else 
            youWin = compChoice === "rock" ? false : true;
        
        if (youWin) {
            declare.innerText = `Your ${userChoice} beat ${compChoice} !`
            declare.style.backgroundColor = "rgba(0, 128, 0, 0.521)"
            decCon.style.backgroundColor = "rgba(0, 128, 0, 0.521)"
            userScore++
        }
        
        else {
            declare.innerText = `${compChoice} beats your ${userChoice} !`
            declare.style.backgroundColor = "rgba(128, 0, 0, 0.521)"
            decCon.style.backgroundColor = "rgba(128, 0, 0, 0.521)"
            compScore++
        }
    }

    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
        playGame(userChoice);
        uScore.innerText = userScore
        pcScore.innerText = compScore
    })
});