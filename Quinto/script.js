document.addEventListener('DOMContentLoaded', function () {
    const rangeInput = document.getElementById('rangeInput');
    const progressBar = document.getElementById('progressBar');
    const fibonacciValueDisplay = document.getElementById('fibonacciValue');
  
    rangeInput.addEventListener('input', updateProgressBar);
  
    function updateProgressBar() {
      const value = rangeInput.value;
      const fibonacciValue = calculateFibonacci(value);
      const percentage = (fibonacciValue / 55) * 100; // 55 is an arbitrary Fibonacci number for scaling
  
      progressBar.style.width = `${percentage}%`;
      fibonacciValueDisplay.textContent = `Valor da Sequência de Fibonacci: ${fibonacciValue}`;
    }
  
    function calculateFibonacci(n) {
      if (n <= 1) return n;
      return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
    }
  });
  