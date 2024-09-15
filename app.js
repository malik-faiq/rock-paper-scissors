let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#comp-score");

const drawGame = () =>{
    msg.innerText = "Game was draw.Play Again."
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin , userChoice, comChoices) => {
    if (userWin){
userScore++;
userScorePara.innerText = userScore;
msg.innerText = `You Win! your ${userChoice} beats ${comChoices}`;
msg.style.backgroundColor = "green";
    }else{
        compScore++;
        comScorePara.innerText = compScore;
        msg.innerText = `you lose! ${comChoices} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}
const gencompChoices = () =>{
    const option = ["rock","paper","scissors"];
   const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
}

const playGame = (userChoice) => {
    const comChoices = gencompChoices();
    // com choices
    console.log("com choice" , comChoices);
    if(userChoice === comChoices){
        // draw game
        drawGame();
    }else{
        let userWin = true;
        if(userWin = userChoice === "rock"){
            // siccors,paper
            userWin = comChoices === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // rock , scissors
        userWin = comChoices === "scissors" ? false:true;
        }else{
                // paper,rock
                userWin = comChoices === "rock" ? false:true;
        }
        showWinner(userWin ,userChoice, comChoices);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame (userChoice);
    });
});