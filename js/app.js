let startBtn = document.querySelector("#startBtn")
let rules = document.querySelector("#rules")
let container = document.querySelector("#container")
let example = document.querySelector("#example")
let myName = document.querySelector(".madeBy")
let body = document.querySelector("body")
let gameTitleContainer = document.querySelector("#gameTitleContainer")
let mainTitle = document.querySelector("#mainTitle")
let answerBox = document.querySelector("#answer-Box")
let meter = document.querySelector("#meter")
let buttonContainer = document.querySelector("#buttons")

let typeArea = document.createElement('input')


const styleChange = () => {
    startBtn.style.display = 'none'
    rules.style.display = 'none'
    example.style.display = 'none'

    mainTitle.style.fontSize = "20px"
    mainTitle.style.marginRight = "20px"
    gameTitleContainer.style.display = "inline"
    gameTitleContainer.style.textAlign = "end"

    var tryAginBtn = document.createElement('button')
    buttonContainer.append(tryAginBtn)
    tryAginBtn.innerText = "TRY AGAIN"
    tryAginBtn.setAttribute("id", "tryAgainBtn")
    var goBackBtn = document.createElement('button')
    buttonContainer.append(goBackBtn)
    goBackBtn.innerText = "MAIN"
    goBackBtn.setAttribute("id", "goBackBtn")

    myName.style.marginTop = "191px"

    answerBox.append(typeArea)
    answerBox.style.marginTop = "160px"
    answerBox.style.background = "black"
    answerBox.style.width = "1200px"
    answerBox.style.height = "240px"
    
    typeArea.setAttribute("type", "text", "placeholder", "ARE YOU READY?")
    timeOut()
    typeArea.style.fontSize = "65px"
    typeArea.style.width = "1000px"
    typeArea.style.margin = "7% 0 0 8%"
    typeArea.style.background = "black"
    typeArea.style.color = "white"
    typeArea.style.textAlign = "center"
    typeArea.style.border = "1px solid black"
    typeArea.style.outline = "none"    
}

const timeOut = () => {
    typeArea.setAttribute("disabled", "disabled")
    if (typeArea.placeholder = "ARE YOU READY?") {
        setTimeout( () => {typeArea.placeholder = "3"}, 2000);
        setTimeout( () => {typeArea.placeholder = "2"}, 3000);
        setTimeout( () => {typeArea.placeholder = "1"}, 4000);
        setTimeout( () => {typeArea.placeholder = "START"}, 5000);
        setTimeout( () => {typeArea.placeholder = "NUMBER HERE"}, 6000);
        setTimeout( () => {typeArea.removeAttribute("disabled", "disabled")}, 6000);
    }
}

const timeRemaining = () => {

}




startBtn.addEventListener('click', () => {
    styleChange()
    

})