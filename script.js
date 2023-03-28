let display = document.getElementById("display");

function digito(digit) {
  display.value += digit;
}

function operador(operator) {
  if (display.value != "") {
    display.value += operator;
  }
}

function limpiarDisplay() {
  display.value = "";
}

function retroceso() {
  display.value = display.value.slice(0, -1);
}

function calcular() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function porcentaje() {
    let expression = display.value;
    let lastOperatorIndex = Math.max(expression.lastIndexOf("+"), expression.lastIndexOf("-"), expression.lastIndexOf("*"), expression.lastIndexOf("/"));
    let lastNumber = expression.slice(lastOperatorIndex + 1);
    let percentage = parseFloat(lastNumber) / 100;
    let updatedExpression = expression.slice(0, lastOperatorIndex + 1) + percentage;
    display.value = updatedExpression;
  }
  
  
  
