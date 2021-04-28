let hour = 0;
let min = 0;
let sec = 0;
let hund = 0;
let startTime = 0;
const time = document.getElementById('time');
const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');
const btnReset = document.getElementById('btn-reset');

function event() {
  btnStart.addEventListener('click', start);
  btnStop.addEventListener('click', stop);
  btnReset.addEventListener('click', reset);
}

event();

function run() {
  hund++;
  if (hund > 99) {
    hund = 0;
    sec++;
  }
  if (sec > 59) {
    sec = 0;
    min++;
  }
  if (min > 59) {
    min = 0;
    hou++;
  }

  hund = ('0' + hund).slice(-2);
  sec = ('0' + sec).slice(-2);
  min = ('0' + min).slice(-2);
  hour = ('0' + hour).slice(-2);
  time.innerHTML = `${hour}:${min}:${sec}:${hund}`;
}

function start() {
  run();
  startTime = setInterval(run, 10);
  btnStart.addEventListener('click', start);
}

function stop() {
  clearInterval(startTime);
  btnStart.addEventListener('click', start);
}

function reset() {
  clearInterval(startTime);
  time.innerHTML = `00:00:00:00`;
  hour = 0;
  min = 0;
  sec = 0;
  hund = 0;
  btnStart.addEventListener('click', start);
}

const clock = document.querySelector('.c-body');
clock.style = `
  width: 300px;
  height: 150px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 45vh;
  justify-content: center;
`;

const screen = document.querySelector('.screen');
screen.style = `
  background-color: #FFE4C4;
  border-radius: 50%;
  box-shadow: 5px 5px #a0a0a0;
  font-size: 3rem;
  display: flex;
  width: 300px;
  justify-content: center;
`;

const buttons = document.querySelector('.c-btn');
buttons.style = `
  display: flex;
  width: 300px;
  justify-content: center;
  gap: 0.5rem;
  
`;

const bStart = document.querySelector('#btn-start');
const bStop = document.querySelector('#btn-stop');
const bReset = document.querySelector('#btn-reset');
bStart.style = `
  background-color: #5c7e2a;
  border-width: 2px;
  color: white;
  font-size: 1.5rem; 
  border-radius: 25px;
  cursor: pointer;  
`;
bStop.style = `
  background-color: #5c7e2a;
  border-width: 2px;
  color: white;
  font-size: 1.5rem; 
  border-radius: 25px;
  cursor: pointer;
`;
bReset.style = `
  background-color: #5c7e2a;
  border-width: 2px;
  color: white;
  font-size: 1.5rem; 
  border-radius: 25px;
  cursor: pointer;
`;
