document.getElementById('calculate').addEventListener('click', function () {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = 'Please enter valid numbers.';
  } else {
    switch (operator) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        result = 'Invalid operator';
    }
  }

  document.getElementById('result').textContent = `Result: ${result}`;

});

document.getElementById('clear').addEventListener('click', function () {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('operator').value = 'add';
  document.getElementById('result').textContent = '';

  document.getElementById('result').textContent = ``;
});

  