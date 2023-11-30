function generateFibonacci() {
    const numberOfTerms = parseInt(document.getElementById('numberOfTerms').value);
    const fibonacciSequenceDiv = document.getElementById('fibonacciSequence');
    
    let fibonacciSequence = [0, 1];
  
    for (let i = 2; i < numberOfTerms; i++) {
      fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    }
  
    const sequenceText = fibonacciSequence.join(', ');
    fibonacciSequenceDiv.textContent = `Sequência de Fibonacci: ${sequenceText}`;
  }
  