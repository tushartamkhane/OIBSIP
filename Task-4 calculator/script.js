let expression = "";

function updateDisplay() {
  document.getElementById("expression").textContent = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById("result").textContent = result;
  } catch {
    document.getElementById("result").textContent = "Error";
  }
}

function delChar() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

function clearDisplay() {
  expression = "";
  updateDisplay();
  document.getElementById("result").textContent = "0";
}

document.querySelectorAll(".buttons button").forEach(button => {
  const val = button.textContent;
  if (val !== "ENTER" && val !== "del" && val !== "clear") {
    button.addEventListener("click", () => {
      if (val === "±") {
        expression += "-";
      } else if (val === "√") {
        expression += "Math.sqrt(";
      } else if (val === "ans") {
        // optional: handle previous answer
      } else {
        expression += val;
      }
      updateDisplay();
    });
  }
});
