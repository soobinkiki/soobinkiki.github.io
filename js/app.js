let startBtn = document.querySelector("#startBtn")
let rules = document.querySelector("#rules")
let example = document.querySelector("#example")
let myName = document.querySelector(".madeBy")
let gameTitleContainer = document.querySelector("#gameTitleContainer")
let mainTitle = document.querySelector("#mainTitle")
let typeArea = document.createElement('input')
let mainPageHide = document.querySelector(".mainHide")
let tryAgainBtn = document.getElementById('tryAgainBtn')
let mainBtn = document.querySelector('#goBackBtn')
let container = document.querySelector('#container')
let hideButton = document.querySelector("#menuButtons")
let timerNoDelay = document.querySelector(".timer")
let timerYesDelay = document.querySelector(".timerDelay")
let answerBox = document.querySelector("#answer-Box")
let resultDisplay = document.querySelector(".resultDisplay")
let count = 0;
let timeRemaining = null;
let resultStore = "";
let player = "1";
let temp = "0";
let currentTimerTime = 16;
let interval = null;
hideButton.classList.add("hideBtn")
hideButton.style.display = "none"
let preventCharsNum = [
    69, 187, 188, 189, 190
]
let bgmMusic = document.getElementById("bgmMusic")
let playPauseBtn = document.getElementById("bgmBtnPlay")
let musicStopBtn = document.getElementById("bgmBtnStop")
let correctSound = document.getElementById("correctSound")
let wrongSound = document.getElementById("wrongSound")
let countdownSound = document.getElementById("countdownSound")
let startbuttonSound = document.getElementById("buttonSound")
let countdownSoundStart = document.getElementById("countdownStart")

const ChangeInGameStylePage = () => {
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
    answerBox.append(typeArea)
    myName.style.marginTop = "180px"
    typeArea.setAttribute("type", "number", "placeholder", "ARE YOU READY?")
    typeArea.setAttribute("class", "typeArea", "id", "clear") 
    timeRemaining = document.createElement("div")
    timeRemaining.classList.add("timer")
    timeRemaining.classList.add("timerDelay")
    resultDisplay.append(timeRemaining)
    timeOut()
}

const timeOut = () => {
    typeArea.setAttribute("disabled", "disabled")
    if (typeArea.placeholder = "ARE YOU READY?") {
        currentTimerTime = 16;
        setTimeout( () => {typeArea.placeholder = "3"; countdownSoundEffect()}, 2000);
        setTimeout( () => {typeArea.placeholder = "2"; countdownSoundEffect()}, 3000);
        setTimeout( () => {typeArea.placeholder = "1"; countdownSoundEffect()}, 4000);
        setTimeout( () => {typeArea.placeholder = "START"; countdownSoundStartEffect()}, 5000);
        setTimeout( () => {typeArea.placeholder = "NUMBERS?"}, 6000);
        setTimeout( () => {display.innerText = "Let's go Player 1. It's your turn"}, 6000)
        setTimeout( () => {typeArea.removeAttribute("disabled", "disabled")}, 6000);
    }
}

const resultNum = () => {
    for (let i=0; i < (typeArea.value.length) - 1; i++) {
        if (resultStore[i] != typeArea.value[i]) {
            display.innerText = `WRONG NUMBERS… \nPlayer ${player} you lost.. please try again!`
            typeArea.setAttribute("disabled", "disabled")
            tryAgainBtn.disabled = false
            tryAgainBtn.style.cursor = "pointer"
            let timeRemaining = document.createElement("div")
            resultDisplay.append(timeRemaining)
            document.querySelector(".timer").style.animationDuration = "0s"
            wrongSoundEffect()
            clearTimer()
            return
        } 
    }
    if (typeArea.value.length != resultStore.length + 1) {
        display.innerText = `WRONG NUMBERS… \nPlayer ${player} you lost.. please try again!`
        typeArea.setAttribute("disabled", "disabled")
        let timeRemaining = document.createElement("div")
        resultDisplay.append(timeRemaining)
        document.querySelector(".timer").style.animationDuration = "0s"
        tryAgainBtn.disabled = false
        tryAgainBtn.style.cursor = "pointer"
        wrongSoundEffect()
        clearTimer()
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
    correctSoundEffect()
}

const firstStartBtn = (event) => {
    currentTimerTime = 16;
    setTimer()
    answerBox.style.display = "block"
    ChangeInGameStylePage()
    hideButton.style.display = "flex"
    tryAgainBtn.disabled = true
    tryAgainBtn.style.cursor = "not-allowed"
}

const tryAgain = () => { 
    typeArea.removeAttribute("disabled", "disabled")
    tryAgainBtn.disabled = true
    tryAgainBtn.style.cursor = "not-allowed"
    display.innerText = "";
    timeOut()
    typeArea.value = "";
    resultStore = "";
    document.querySelector(".timer").remove()
    timeRemaining = document.createElement("div")
    timeRemaining.classList.add("timer")
    timeRemaining.classList.add("timerDelay")
    resultDisplay.append(timeRemaining)
    setTimer()
}

const setTimer = () => {
    interval = setInterval( () => {
        currentTimerTime -= 1
        if (typeArea.value === "" && currentTimerTime <= 0) {
            display.innerText = `GAME OVER! Please type number...`
            tryAgainBtn.disabled = false
            tryAgainBtn.style.cursor = "pointer"
            typeArea.setAttribute("disabled", "disabled")
            wrongSoundEffect()
            clearTimer()
        }
    }, 1000)
}

const clearTimer = () => {
    clearInterval(interval);
}

const playerEnter = (event) => { 
    if (event.key === "Enter") {
        document.querySelector(".timer").remove()
        let timeRemaining = document.createElement("div")
        timeRemaining.classList.add("timer")
        resultDisplay.append(timeRemaining)
        resultNum()
        currentTimerTime = 10;
    }
}
const goBackToMain = () => {
    window.location.href = "index.html"
}
const buttonSound = () => {
    startbuttonSound.play()
    return
}
const countdownSoundEffect = () => {
    countdownSound.play()
    return
}
const countdownSoundStartEffect = () => {
    countdownSoundStart.play()
    return
}
const correctSoundEffect = () => {
    correctSound.play()
    return
}
const wrongSoundEffect = () => {
    wrongSound.play()
    return
}

// const autoPlay = () => {
//     setTimeout( () => {playPauseBtn.trigger("click")}, 200)
// }

// bgmMusic.addEventListener('DOMContentLoaded', autoPlay)

const playPause = () => {
    
    if (count === 0) {
        count = 1;
        bgmMusic.play();
        playPauseBtn.innerHTML = "Pause &#9208;";
    } else {
        count = 0;
        bgmMusic.pause()
        playPauseBtn.innerHTML = "Play &#9658;";
    }
}
const stop = () => {
    playPause()
    bgmMusic.pause()
    bgmMusic.currentTime = 0;
    playPauseBtn.innerHTML = "Play &#9658;"
}

const preventChars = (event) => {
    if (preventCharsNum.includes(event.keyCode)){
        event.preventDefault()
    }
}

// window.onload = () => {
//     playPauseBtn.click()
// }

typeArea.addEventListener('keydown', preventChars) 
typeArea.addEventListener('keyup', playerEnter)
mainBtn.addEventListener('click', goBackToMain)
mainBtn.addEventListener('click', buttonSound) 
tryAgainBtn.addEventListener('click', tryAgain)
tryAgainBtn.addEventListener('click', buttonSound)
startBtn.addEventListener('click', firstStartBtn)
startBtn.addEventListener('click', buttonSound)
playPauseBtn.addEventListener('click', playPause)
musicStopBtn.addEventListener('click', stop)