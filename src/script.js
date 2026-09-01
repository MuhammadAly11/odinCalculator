let g_lNum = "";
let g_rNum = "";
let g_operator = "";
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
  input.value = `${g_lNum} ${g_operator} ${g_rNum}`
}

let buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
  if (mods.includes(btn.textContent)) return;
  btn.addEventListener("click", () => {
    if (!Number.isInteger(+btn.textContent)) operator = btn.textContent;
    else if (g_operator == "") g_lNum += btn.textContent;
    else g_rNum += btn.textContent;
    updateDisplay();;
  })
});

let acBtn = document.querySelector("#btn-ac");
acBtn.addEventListener("click", () => {
  clear();
  updateDisplay();;
})

function clear() {
  g_lNum = "";
  g_rNum = "";
  g_operator = "";
}

let equalBtn = document.querySelector("#btn-equal");
equalBtn.addEventListener("click", () => {
  let res = operate(g_operator, +g_lNum, +g_rNum)
  clear();
  g_lNum = res;
  updateDisplay();
})

