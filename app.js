let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice= () => {
    let options = ["rock","paper","scissors"];
    //ROCK,PAPER,SCISSORS
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "GAME WAS DRAW. PLAY AGAIN.!";
    msg.style.backgroundColor = "grey";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("YOU WIN.!");
        msg.innerText =`YOU WON.! YOUR ${userChoice} BEATS ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("YOU LOSE.!");
        msg.innerText = `YOU LOST.! ${compChoice} BEATS YOUR ${userChoice}`;;
        msg.style.backgroundColor = "red";
    }
}

const playGame= (userChoice) =>{
    console.log("user choice =", userChoice);
    //GENERATE COMPUTER CHOICE --> modular war of programming
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        //DRAW CONDITION
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //SCISSORS,PAPER
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //ROCK,SCISSORS
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //ROCK,PAPER
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
})

