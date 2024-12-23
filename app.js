let [seconds, minutes, hours] = [0, 0, 0];
let count = null;
const displayTime = document.getElementById("display-time");

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
  if (count !== null) {
    clearInterval(count);
  }
  count = setInterval(stopwatch, 1000);
}

function watchStop() {
  clearInterval(count);
}

function watchReset() {
  clearInterval(count);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}
