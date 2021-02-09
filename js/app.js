let startBtn = document.querySelector("#startBtn")
let buttonContainer = document.querySelector("#menuButtons")
let rules = document.querySelector("#rules")
let example = document.querySelector("#example")
let myName = document.querySelector(".madeBy")
let gameTitleContainer = document.querySelector("#gameTitleContainer")
let mainTitle = document.querySelector("#mainTitle")
let answerBox = document.querySelector("#answer-Box")
let meter = document.querySelector("#meter")
let typeArea = document.createElement('input')
let resultDisplay = document.querySelector(".resultDisplay")
let resultStore = "";

const styleChange = () => {
    startBtn.style.display = 'none'
    rules.style.display = 'none'
    example.style.display = 'none'

    mainTitle.style.fontSize = "20px"
    mainTitle.style.marginRight = "20px"
    gameTitleContainer.style.display = "inline"
    gameTitleContainer.style.textAlign = "end"

    var tryAgainBtn = document.createElement('button')
    buttonContainer.append(tryAgainBtn)
    tryAgainBtn.innerText = "TRY AGAIN"
    tryAgainBtn.setAttribute("id", "tryAgainBtn")
    var goBackBtn = document.createElement('button')
    buttonContainer.append(goBackBtn)
    goBackBtn.innerText = "MAIN"
    goBackBtn.setAttribute("id", "goBackBtn")
    var clearBtn = document.createElement('button')
    clearBtn.innerText = "CLEAR NUMBERS"
    clearBtn.setAttribute("id", "clearBtn")
    var display = document.createElement('p')
    resultDisplay.append(display)
    display.setAttribute("id", "display")
    display.innerText = "";
    
    answerBox.append(typeArea)
    answerBox.append(clearBtn)
    answerBox.style.marginTop = "30px"
    answerBox.style.background = "black"
    answerBox.style.width = "1200px"
    answerBox.style.height = "240px"
    
    myName.style.marginTop = "162px"
    
    typeArea.setAttribute("type", "text", "placeholder", "ARE YOU READY?")
    typeArea.setAttribute("class", "typeArea", "id", "clear")   
    timeOut()
}

const timeOut = () => {
    typeArea.setAttribute("disabled", "disabled")
    if (typeArea.placeholder = "ARE YOU READY?") {
        setTimeout( () => {typeArea.placeholder = "3"}, 200);
        setTimeout( () => {typeArea.placeholder = "2"}, 300);
        setTimeout( () => {typeArea.placeholder = "1"}, 400);
        setTimeout( () => {typeArea.placeholder = "START"}, 500);
        setTimeout( () => {typeArea.placeholder = "NUMBER HERE"}, 600);
        setTimeout( () => {typeArea.removeAttribute("disabled", "disabled")}, 600);
    }
}

const timeRemaining = () => {

}

const resultNum = () => {
    for (let i=0; i < (typeArea.value.length) - 1; i++) {
        if (resultStore[i] != typeArea.value[i]) {
            display.innerText = "WRONG! GAME OVER"
        } else display.innerText = "CORRECT! CLEAR NUMBERS"
    }
    resultStore = typeArea.value
}

typeArea.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        resultNum()
    }

})

const typeAreaClear = () => {
    typeArea.value = '';
}
startBtn.addEventListener('click', () => {
    styleChange()
    clearBtn.addEventListener('click', () => {
        typeAreaClear()
        display.innerText = "Player1 It's your turn"
    })
})
