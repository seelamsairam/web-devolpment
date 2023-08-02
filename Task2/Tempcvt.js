document.getElementById('convertBtn').addEventListener('click', convertTemperature);

function convertTemperature() {
  // Get input values
  const inputValue = parseFloat(document.getElementById('inputValue').value);
  const inputUnit = document.getElementById('inputUnit').value;
  const outputUnit = document.getElementById('outputUnit').value;

  // Check if input value is valid
  if (isNaN(inputValue)) {
    alert('Please enter a valid temperature!');
    return;
  }

  let result;

  // Convert temperature
  if (inputUnit === 'celsius') {
    if (outputUnit === 'fahrenheit') {
      result = (inputValue * 9 / 5) + 32;
    } else if (outputUnit === 'kelvin') {
      result = inputValue + 273.15;
    } else {
      result = inputValue;
    }
  } else if (inputUnit === 'fahrenheit') {
    if (outputUnit === 'celsius') {
      result = (inputValue - 32) * 5 / 9;
    } else if (outputUnit === 'kelvin') {
      result = (inputValue - 32) * 5 / 9 + 273.15;
    } else {
      result = inputValue;
    }
  } else if (inputUnit === 'kelvin') {
    if (outputUnit === 'celsius') {
      result = inputValue - 273.15;
    } else if (outputUnit === 'fahrenheit') {
      result = (inputValue - 273.15) * 9 / 5 + 32;
    } else {
      result = inputValue;
    }
  }

  // Update output value
  document.getElementById('outputValue').value = result.toFixed(2);
}