function convertToCelsius() {
    const fahrenheitValue = parseFloat(document.getElementById('fahrenheitInput').value);
    if (!isNaN(fahrenheitValue)) {
      const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
      document.getElementById('celsiusInput').value = celsiusValue.toFixed(2);
    }
  }

  function convertToFahrenheit() {
    const celsiusValue = parseFloat(document.getElementById('celsiusInput').value);
    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
      document.getElementById('fahrenheitInput').value = fahrenheitValue.toFixed(2);
    }
  }