var screen = document.getElementById('screen');
var clearButton = document.getElementById('clear');
var calculateButton = document.getElementById('calculate');

function appendToScreen(value) {
  screen.innerHTML += value;
}

function clearScreen() {
  screen.innerHTML = '';
}

function calculate() {
  var expression = screen.innerHTML;

  if (expression.includes('/0')) {
    alert('No se puede dividir por cero');
    clearScreen();
    return;
  }

  var result = eval(expression);

  screen.innerHTML = result;
}

clearButton.addEventListener('click', clearScreen);

calculateButton.addEventListener('click', calculate);

document.addEventListener('keydown', function(event) {
  var key = event.key;

  if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    screen.innerHTML = screen.innerHTML.slice(0, -1);
  } else if (key === 'Escape') {
    clearScreen();
  } else if (/\d|\+|\-|\*|\//.test(key)) {
    appendToScreen(key);
  }
});