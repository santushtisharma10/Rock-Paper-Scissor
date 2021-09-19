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
    document.getElementById("user-bd").classList.add("green-glow")
    document.getElementById("comp-bd").classList.add("red-glow")

    setTimeout(()=>{document.getElementById("user-bd").classList.remove("green-glow")
    document.getElementById("comp-bd").classList.remove("red-glow")
}, 500)

}
const lose = () => {

    computer++;
    console.log(computer, computerScore.innerHTML)
    console.log("lose")
    computerScore.innerHTML = computer;
    document.getElementById("user-bd").classList.add("red-glow")
    document.getElementById("comp-bd").classList.add("green-glow")


    setTimeout(()=>{document.getElementById("user-bd").classList.remove("red-glow") 
    document.getElementById("comp-bd").classList.remove("green-glow")

}, 500)
}
const draw = () => {

    document.getElementById("comp-bd").classList.add("gray-glow")
    document.getElementById("user-bd").classList.add("gray-glow")

    
    setTimeout(()=>{document.getElementById("user-bd").classList.remove("gray-glow") 
    document.getElementById("comp-bd").classList.remove("gray-glow")

}, 500)

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
        case "pp":draw()
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