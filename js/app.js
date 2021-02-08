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
let typeArea = document.createElement('input')


const styleChange = () => {
    startBtn.style.display = 'none'
    rules.style.display = 'none'
    example.style.display = 'none'

    mainTitle.style.fontSize = "20px"
    mainTitle.style.marginRight = "20px"
    gameTitleContainer.style.display = "inline"
    gameTitleContainer.style.textAlign = "end"
    
    myName.style.marginTop = "185px"

    // let answerContainer = document.createElement('div')
    // answerBox.append(answerContainer)
    // answerContainer.style.width = '1200px'
    // answerContainer.style.height = '170px'
    // answerContainer.style.background = 'black'
    // answerContainer.style.marginTop = '180px'

    typeArea.setAttribute("type", "text", "placeholder")
    typeArea.placeholder = "NUMBERS HERE..."
    answerBox.append(typeArea)
    answerBox.style.marginTop = "200px"
    answerBox.style.background = "black"
    answerBox.style.width = "1200px"
    answerBox.style.height = "240px"

    typeArea.style.fontSize = "65px"
    typeArea.style.width = "1000px"
    typeArea.style.margin = "7% 0 0 8%"
    typeArea.style.background = "black"
    typeArea.style.color = "white"
    typeArea.style.textAlign = "center"
    typeArea.style.border = "none"
}
// typeArea.addEventListener('click', () => {
//     typeArea.style.border = "none"
// })

const timeRemaining = () => {
}

startBtn.addEventListener('click', () => {
    styleChange()
})