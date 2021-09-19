// make a scoreboard 
let user = 0
let computer = 0
const userScore = document.getElementById("userScore")
const computerScore = document.getElementById("compScore")
const rock = document.getElementById("r")
const paper = document.getElementById("p")
const scissor = document.getElementById("s")
const userImg = document.getElementById("user-mainImg");
const computerImg = document.getElementById("comp-mainImg");

const choice = () => {

    const arr = ["r", "p", "s"]
    return arr[Math.floor(Math.random()*3)];

}

const win = () => {

    user += 1;
    console.log(user, userScore.innerHTML)
    console.log("win")
    userScore.innerHTML = user;

}
const lose = () => {

    computer++;
    console.log(computer, computerScore.innerHTML)
    console.log("lose")
    computerScore.innerHTML = computer;
}

const playGame = (userChoice) => {
    const compChoice = choice()


    switch(compChoice) {

        case "r": computerImg.src="images/rock-right.png";
                  break;
        case "p": computerImg.src="images/paper-right.png";
                  break;
        case "s": computerImg.src="images/scissor-right.png";
                  break;
    }
    console.log(userChoice, compChoice);
    switch(compChoice+userChoice) {

        case "sp":
        case "rs":
        case "pr":
                  lose()
                  break;
        case "sr":
        case "rp":
        case "ps":
                  win()
                  break;
        case "ss":
        case "rr":
        case "pp":console.log("Draw")
                  break;
    }
    
    
}

rock.addEventListener("click", ()=>{

    console.log("rock");
    userImg.src = "images/rock-left.png";
    playGame("r")

})
paper.addEventListener("click", ()=>{

    console.log("paper");
    userImg.src = "images/paper-lefte.png"
    playGame("p")

})
scissor.addEventListener("click", ()=>{

    console.log("scissor");
    userImg.src = "images/scissor-left.png"
    playGame("s")

})


function main() {


}