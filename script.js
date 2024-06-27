// script.js
let timer;
let startTime;
let elapsedTime = 0;
let running = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', () => {
    if (!running) {
        running = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 1000 / 60); // update every 1/60th of a second
    }
});

stopButton.addEventListener('click', () => {
    if (running) {
        running = false;
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
    }
});

resetButton.addEventListener('click', () => {
    running = false;
    clearInterval(timer);
    elapsedTime = 0;
    displayTime(0);
});

function updateTime() {
    elapsedTime = Date.now() - startTime;
    displayTime(elapsedTime);
}

function displayTime(time) {
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 2)}`;
}

function pad(number, digits = 2) {
    return number.toString().padStart(digits, '0');
}
