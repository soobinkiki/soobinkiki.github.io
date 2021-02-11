let startBtn = document.querySelector("#startBtn")
let buttonContainer = document.querySelector("#menuButtons")
let rules = document.querySelector("#rules")
let example = document.querySelector("#example")
let myName = document.querySelector(".madeBy")
let gameTitleContainer = document.querySelector("#gameTitleContainer")
let mainTitle = document.querySelector("#mainTitle")
let answerBox = document.querySelector("#answer-Box")
let typeArea = document.createElement('input')
let resultDisplay = document.querySelector(".resultDisplay")
let mainPageHide = document.querySelector(".mainHide")
let temp = document.querySelector(".temp")
let tryAgainBtn = document.createElement('button')
let mainBtn = document.createElement('button')
let resultStore = "";
let player = "1";
let container = document.querySelector('#container')

const createButton = () => {
    buttonContainer.append(tryAgainBtn)
    tryAgainBtn.innerText = "Try again"
    tryAgainBtn.setAttribute("id", "tryAgainBtn")
    buttonContainer.append(mainBtn)
    mainBtn.innerText = "MAIN"
    mainBtn.setAttribute("id", "goBackBtn")
}

const goBackToMain = () => {
    window.location.href = "index.html"
}

// 3 2 1 start
const ChangeInGameStylePage = () => {
    createButton()

    startBtn.style.display = 'none'
    rules.style.display = 'none'
    example.style.display = 'none'
    
    mainTitle.style.fontSize = "20px"
    mainTitle.style.marginRight = "20px"
    gameTitleContainer.style.display = "inline"
    gameTitleContainer.style.textAlign = "end"
    
    var display = document.createElement('p')
    resultDisplay.append(display)
    display.setAttribute("id", "display")
    display.innerText = "";
    
    let timeRemaining = document.createElement("div")
    timeRemaining.setAttribute("class", "timer")
    resultDisplay.append(timeRemaining)
    answerBox.append(typeArea)
    
    myName.style.marginTop = "173px"
    
    typeArea.setAttribute("type", "text", "placeholder", "ARE YOU READY?")
    typeArea.setAttribute("class", "typeArea", "id", "clear")   
    timeOut()
    //tryAgain()
}

const timeOut = () => {
    typeArea.setAttribute("disabled", "disabled")
    if (typeArea.placeholder = "ARE YOU READY?") {
        setTimeout( () => {typeArea.placeholder = "3"}, 2000);
        setTimeout( () => {typeArea.placeholder = "2"}, 3000);
        setTimeout( () => {typeArea.placeholder = "1"}, 4000);
        setTimeout( () => {typeArea.placeholder = "START"}, 5000);
        setTimeout( () => {typeArea.placeholder = "PLEASE ENTER"}, 6000);
        setTimeout( () => {typeArea.removeAttribute("disabled", "disabled")}, 6000);
    }
}

const resultNum = () => {
    for (let i=0; i < (typeArea.value.length) - 1; i++) {
        if (resultStore[i] != typeArea.value[i]) {
            display.innerText = `WRONG NUMBERS… \nPlayer ${player} you lost! click 'START' to play again`
            typeArea.setAttribute("disabled", "disabled")
            return
        } 
    }

    if (typeArea.value.length != resultStore.length + 1) {
        display.innerText = `WRONG NUMBERS… \nPlayer ${player} you lost! click 'START' to play again`
        return
    }

    resultStore = typeArea.value
    
    if (player === "2") {
        player = "1"
    } else if (player === "1") {
        player = "2"
    }
    typeArea.value = "";
    display.innerText = `CORRECT! player${player} It's your turn`
}

const firstStartBtn = () => {
    answerBox.style.display = "block"
    ChangeInGameStylePage()
    setTimeout( () => {display.innerText = "Player 1 It's your turn"}, 6000)
}


const playerEnter = (event) => {
    if (event.key === "Enter") {
        resultNum()        
    }
}

const tryAgain = () => { 
    typeArea.removeAttribute("disabled", "disabled")
    display.innerText = "";
    timeOut();
    setTimeout( () => {display.innerText = "Player 1 It's your turn"}, 6000)
    typeArea.value = "";
    resultStore = "";
}

typeArea.addEventListener('keyup', playerEnter);

mainBtn.addEventListener('click', goBackToMain);

startBtn.addEventListener('click', firstStartBtn);

tryAgainBtn.addEventListener('click', tryAgain);




