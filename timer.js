
let [hours, minutes, seconds] = [0, 0, 0];
let timerDisplay = document.getElementById('timer');
let timer = null;

function updateTimer(){

    seconds ++;

    if(seconds == 60){

        minutes ++;
        seconds = 0;

        if(minutes == 60){

            minutes = 0;
            hours ++;
        }
    }

    const h = hours < 10 ? "0" + hours : hours;
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.innerText = `${h}:${m}:${s}`;
}


document.getElementById("start").addEventListener("click", () => {
    if (timer !== null) return;
    timer = setInterval(updateTimer, 1000);
});

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    [hours, minutes, seconds] = [0, 0, 0];
    timerDisplay.innerText = "00:00:00";
});
