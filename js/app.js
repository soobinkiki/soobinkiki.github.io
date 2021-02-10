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
let resultStore = "";
let player = "1";

const buttonCreated = () => {
    var tryAgainBtn = document.createElement('button')
    buttonContainer.append(tryAgainBtn)
    tryAgainBtn.innerText = "START"
    tryAgainBtn.setAttribute("id", "tryAgainBtn")
    var mainBtn = document.createElement('button')
    buttonContainer.append(mainBtn)
    mainBtn.innerText = "MAIN"
    mainBtn.setAttribute("id", "goBackBtn")

    // mainBtn.addEventListener('click', () => { // main button
    //     let hide = document.querySelector(".hide")
    //     let temp = document.querySelector(".temp")
        
    //     hide.style.display = "none"
    //     answerBox.style.display = "none"
    //     // startBtn.style.display = 'block'
    //     rules.style.display = 'block'
    //     temp.style.display = 'block'
    //     console.log("clicked");
    // })
}

const styleChange = () => {
    startBtn.style.display = 'none'
    rules.style.display = 'none'
    example.style.display = 'none'
    
    mainTitle.style.fontSize = "20px"
    mainTitle.style.marginRight = "20px"
    gameTitleContainer.style.display = "inline"
    gameTitleContainer.style.textAlign = "end"
    
    buttonCreated()
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
    tryAgain()
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
            display.innerText = `WRONG NUMBERS! \nPlayer ${player} you lost! click 'START' to play again`
            typeArea.setAttribute("disabled", "disabled")
            return
        } 
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

typeArea.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        resultNum()
        // let timeBar = document.querySelector("#timeBar")
        
    }
})

startBtn.addEventListener('click', () => {  // first page start button
    answerBox.style.display = "block"
    styleChange()
    setTimeout( () => {display.innerText = "Player 1 It's your turn"}, 6000)
})

const tryAgain = () => { //start button
    tryAgainBtn.addEventListener('click', () => {
        typeArea.removeAttribute("disabled", "disabled")
        display.innerText = "";
        timeOut()
        setTimeout( () => {display.innerText = "Player 1 It's your turn"}, 6000)
        typeArea.value = "";
        resultStore = "";
    })
}


