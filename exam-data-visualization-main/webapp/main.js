const counterElement = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

let counterValue = 0;

increaseBtn.addEventListener("click", () => {
  counterValue++;
  updateCounter();
});

decreaseBtn.addEventListener("click", () => {
  counterValue--;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  counterValue = 0;
  updateCounter();
});

function updateCounter() {
  counterElement.textContent = counterValue;
}
