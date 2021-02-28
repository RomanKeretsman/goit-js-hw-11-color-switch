const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeColor = {
  timerId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    refs.startBtn.disabled = true;
    this.isActive = true;
    this.timerId = setInterval(() => {
      refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  },

  stop() {
    clearInterval(this.timerId);
    refs.startBtn.disabled = false;
    this.intervalId = null;
    this.isActive = false;
  },
};
refs.startBtn.addEventListener("click", changeColor.start.bind(changeColor));
refs.stopBtn.addEventListener("click", changeColor.stop.bind(changeColor));
