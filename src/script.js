let g_lNum = "";
let g_rNum = "";
let g_operator = "";
let g_isResult = false;
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

function clear() {
  g_lNum = "";
  g_rNum = "";
  g_operator = "";
}

function evaluate() {
  if (g_rNum === "" || g_operator === "" || g_lNum === "") {
    console.error("operator or number is null");
    return;
  }
  if (g_operator === "/" || g_lNum === "0") {
    alert("Nope! you can't crash me");
    clear();
    return;
  }
  let sum = +operate(g_operator, +g_lNum, +g_rNum).toFixed(2);
  clear();
  g_lNum = sum.toString();
  updateDisplay();
  g_isResult = true;
}

function handelOperator(operator) {
  if (g_operator === '') g_operator = operator;
  else if (g_rNum === '') g_operator = operator;
  else evaluate();
}

let buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
  if (mods.includes(btn.textContent)) return;
  btn.addEventListener("click", () => {
    if (g_isResult) {
      g_isResult = false;
      clear();
    }
    if (!Number.isInteger(+btn.textContent)) handelOperator(btn.textContent);
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

let equalBtn = document.querySelector("#btn-equal");
equalBtn.addEventListener("click", () => {
  evaluate();
})

