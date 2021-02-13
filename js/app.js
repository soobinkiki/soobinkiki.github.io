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
var bgmMusic = document.getElementById("bgmMusic")
var playPauseBtn = document.getElementById("bgmBtnPlay")
var musicStopBtn = document.getElementById("bgmBtnStop")
var correctSound = document.getElementById("correctSound")
var wrongSound = document.getElementById("wrongSound")
var countdownSound = document.getElementById("countdownSound")
var startbuttonSound = document.getElementById("buttonSound")
var countdownSoundStart = document.getElementById("countdownStart")
var count = 0;
let timeRemaining = null;
let resultStore = "";
let player = "1";
let temp = "0";
hideButton.classList.add("hideBtn")
hideButton.style.display = "none"

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
    timeRemaining = document.createElement("div")
    timeRemaining.classList.add("timer")
    timeRemaining.classList.add("timerDelay")
    resultDisplay.append(timeRemaining)
    answerBox.append(typeArea)
    myName.style.marginTop = "176px"
    typeArea.setAttribute("type", "text", "placeholder", "ARE YOU READY?")
    typeArea.setAttribute("class", "typeArea", "id", "clear") 
    timeOut()
}

const timeOut = () => {
    typeArea.setAttribute("disabled", "disabled")
    if (typeArea.placeholder = "ARE YOU READY?") {
        setTimeout( () => {typeArea.placeholder = "3"; countdownSoundEffect()}, 2000);
        setTimeout( () => {typeArea.placeholder = "2"; countdownSoundEffect()}, 3000);
        setTimeout( () => {typeArea.placeholder = "1"; countdownSoundEffect()}, 4000);
        setTimeout( () => {typeArea.placeholder = "START"; countdownSoundStartEffect()}, 5000);
        setTimeout( () => {typeArea.placeholder = "PLEASE ENTER"}, 6000);
        setTimeout( () => {typeArea.removeAttribute("disabled", "disabled")}, 6000);
    }
}

const resultNum = () => {
    for (let i=0; i < (typeArea.value.length) - 1; i++) {
        if (resultStore[i] != typeArea.value[i]) {
            display.innerText = `WRONG NUMBERS… \nPlayer ${player} you lost! click 'START' to play again`
            typeArea.setAttribute("disabled", "disabled")
            let timeRemaining = document.createElement("div")
            resultDisplay.append(timeRemaining)
            document.querySelector(".timer").style.animationDuration = "0s"
            wrongSoundEffect()
            return
        } 
    }
    if (typeArea.value.length != resultStore.length + 1) {
        display.innerText = `WRONG NUMBERS… \nPlayer ${player} you lost! click 'START' to play again`
        typeArea.setAttribute("disabled", "disabled")
        wrongSoundEffect()
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

const firstStartBtn = () => {
    answerBox.style.display = "block"
    ChangeInGameStylePage()
    setTimeout( () => {display.innerText = "Player 1 It's your turn"}, 6000)
    setTimeout( () => {if (player = "1") {
        display.innerText = `Time is up! please type numbers. Try again!`
        wrongSoundEffect()
        typeArea.setAttribute("disabled", "disabled")
    }}, 16000)
    hideButton.style.display = "flex"
}

const playerEnter = (event) => { 
    if (event.key === "Enter") {
        document.querySelector(".timer").remove()
        let timeRemaining = document.createElement("div")
        timeRemaining.classList.add("timer")
        resultDisplay.append(timeRemaining)
        resultNum()
    } 
}

const tryAgain = () => { 
    typeArea.removeAttribute("disabled", "disabled")
    display.innerText = "";
    timeOut()
    setTimeout( () => {display.innerText = "Player 1 It's your turn"}, 6000)
    setTimeout( () => {if (player = "1") {
        display.innerText = `Time is up! please type numbers. Try again!`
        wrongSoundEffect()
        typeArea.setAttribute("disabled", "disabled")
    }}, 16000)
    typeArea.value = "";
    resultStore = "";
    document.querySelector(".timer").remove()
    timeRemaining = document.createElement("div")
    timeRemaining.classList.add("timer")
    timeRemaining.classList.add("timerDelay")
    resultDisplay.append(timeRemaining)
}

const goBackToMain = () => {
    window.location.href = "index.html"
}

const buttonSound = () => {
    startbuttonSound.play()
}

const countdownSoundEffect = () => {
    countdownSound.play()
}
const countdownSoundStartEffect = () => {
    countdownSoundStart.play()
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



// window.onload = () => {
//     playPauseBtn.click()
// }

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


typeArea.addEventListener('keyup', playerEnter);
mainBtn.addEventListener('click', goBackToMain);
mainBtn.addEventListener('click', buttonSound); 
tryAgainBtn.addEventListener('click', tryAgain);
tryAgainBtn.addEventListener('click', buttonSound);
startBtn.addEventListener('click', firstStartBtn);
startBtn.addEventListener('click', buttonSound);
playPauseBtn.addEventListener('click', playPause)
musicStopBtn.addEventListener('click', stop)
