const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");
let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  if (counterValue > 0) {
    counterValue--;
    valueEl.textContent = counterValue;
  }
  if (counterValue === 0) {
    decrementBtn.disabled = true;
  }
});

incrementBtn.addEventListener("click", () => {
  counterValue++;
  valueEl.textContent = counterValue;
  if (counterValue > 0) {
    decrementBtn.disabled = false;
  }
});
