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
let resultStore = "";
let player = "1";

const styleChange = () => {
    startBtn.style.display = 'none'; rules.style.display = 'none'; example.style.display = 'none'

    mainTitle.style.fontSize = "20px"
    mainTitle.style.marginRight = "20px"
    gameTitleContainer.style.display = "inline"
    gameTitleContainer.style.textAlign = "end"

    var tryAgainBtn = document.createElement('button')
    buttonContainer.append(tryAgainBtn)
    tryAgainBtn.innerText = "START"
    tryAgainBtn.setAttribute("id", "tryAgainBtn")
    var mainBtn = document.createElement('button')
    buttonContainer.append(mainBtn)
    mainBtn.innerText = "MAIN"
    mainBtn.setAttribute("id", "goBackBtn")
    var clearBtn = document.createElement('button')
    clearBtn.innerText = "ENTER / CLEAR"
    clearBtn.setAttribute("id", "clearBtn")
   
    var display = document.createElement('p')
    resultDisplay.append(display)
    display.setAttribute("id", "display")
    display.innerText = "";

    let timeRemaining = document.createElement("div")
    timeRemaining.setAttribute("class", "timer")
    resultDisplay.append(timeRemaining)
    
    answerBox.append(typeArea)
    answerBox.append(clearBtn)
    answerBox.style.marginTop = "30px"
    answerBox.style.background = "black"
    answerBox.style.width = "1200px"
    answerBox.style.height = "240px"
    
    myName.style.marginTop = "160px"
    
    typeArea.setAttribute("type", "text", "placeholder", "ARE YOU READY?")
    typeArea.setAttribute("class", "typeArea", "id", "clear")   
    timeOut()
    tryAgain()
}
const timeOut = () => {
    typeArea.setAttribute("disabled", "disabled")
    if (typeArea.placeholder = "ARE YOU READY?") {
        setTimeout( () => {typeArea.placeholder = "3"}, 2000);
        setTimeout( () => {typeArea.placeholder = "2"}, 3000);
        setTimeout( () => {typeArea.placeholder = "1"}, 4000);
        setTimeout( () => {typeArea.placeholder = "START"}, 5000);
        setTimeout( () => {typeArea.placeholder = "ENTER NUMBERS"}, 6000);
        setTimeout( () => {typeArea.removeAttribute("disabled", "disabled")}, 6000);
    }
}

const resultNum = () => {
    for (let i=0; i < (typeArea.value.length) - 1; i++) {
        if (resultStore[i] != typeArea.value[i]) {
            display.innerText = `WRONG NUMBERS! Player${player} you lost! click 'START' to play again`
            typeArea.setAttribute("disabled", "disabled")
            clearBtn.disabled = true
            return
        } 
    }
    resultStore = typeArea.value

    if (player === "2") {
        player = "1"
        console.log(player);
    } else if (player === "1") {
        player = "2"
        console.log(player);

    }
    typeArea.value = "";
    display.innerText = `Correct! player${player} It's your turn`

}

typeArea.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        resultNum()
    }
})

startBtn.addEventListener('click', () => {  // first page start button
    styleChange()
    setTimeout( () => {display.innerText = "Player1 It's your turn"}, 6000)
    clearBtn.addEventListener('click', () => {
        typeArea.value = '';
        console.log(resultStore);

    })
})

const tryAgain = () => { //start button
    tryAgainBtn.addEventListener('click', () => {
        typeArea.removeAttribute("disabled", "disabled")
        clearBtn.disabled = false;
        display.innerText = "";
        timeOut()
        setTimeout( () => {display.innerText = "Player1 It's your turn"}, 6000)
        typeArea.value = "";
        resultStore = "";
    })
}

var mainBtn = document.createElement('button')
mainBtn.addEventListener('click', () => { // main button
    styleChange().display = "none"
    // startBtn.style.display = "block"
    // rules.style.display = "block"
    // example.style.display = "block"
    // tryAgainBtn.style.display = "none"
    // mainBtn.style.display = "none"
    // answerBox.style.display = "none"
    // typeArea.style.display = "none"
    // display.style.display = "none"
})

const timeRemaining = () => {  // time remaining bar

}