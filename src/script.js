let lNum = "";
let rNum = "";
let operator = "";
const input = document.querySelector('input[name="in"]');
const mods = ["=", "AC"];

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return substract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

function updateDisplay() {
  input.value = `${lNum} ${operator} ${rNum}`
}

let buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
  if (mods.includes(btn.textContent)) return;
  btn.addEventListener("click", () => {
    if (!Number.isInteger(+btn.textContent)) operator = btn.textContent;
    else if (operator == "") lNum += btn.textContent;
    else rNum += btn.textContent;
    updateDisplay();;
  })
});

let acBtn = document.querySelector("#btn-ac");
acBtn.addEventListener("click", () => {
  lNum = "";
  rNum = "";
  operator = "";
  updateDisplay();;
})
