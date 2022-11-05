let seconds = 0
let minuts = 0
let hours = 0
let variavel

function start() {
    variavel = setInterval(second, 1000)
}

function pause() {
    clearInterval(variavel);
}

function stop() {
    clearInterval(variavel);
    seconds = 0
    minuts = 0
    hours = 0
    document.querySelector('.time').innerHTML = '00:00:00'
}

function second() {
    seconds ++;
    if (seconds==60){
        minuts++
        seconds = 00
    }

    if (minuts==60){
        hours ++
        minuts = 00
    }
    
    let exec = document.querySelector('.time').innerHTML = `0${hours}:0${minuts}:0${seconds}`

    if (seconds > 9){
        exec = document.querySelector('.time').innerHTML = `0${hours}:0${minuts}:${seconds}`
    }

    if (minuts > 9){
        exec = document.querySelector('.time').innerHTML = `0${hours}:${minuts}:${seconds}`
    }

    if (hours > 9){
        exec = document.querySelector('.time').innerHTML = `${hours}:${minuts}:${seconds}`
    }

}
































// const buttonStart = document.getElementById('start')
// const buttonStop = document.getElementById('stop')
// const buttonReset = document.getElementById('reset')
// const time = document.querySelector('.time')

// let numMiliseconds = document.querySelector('.miliseconds').innerHTML
// let textMiliseconds = document.querySelector('.miliseconds')

// function miliseconds() {
//     setInterval(() =>{
//         numMiliseconds++
//         textMiliseconds.innerHTML = numMiliseconds
//         if (numMiliseconds > 60){
//             textMiliseconds.textContent = 0
//         }
//     },10);
    
// }

// buttonStart.onclick = miliseconds