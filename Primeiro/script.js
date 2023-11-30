function calculateSum() {
    const numberOfNumbers = parseInt(document.getElementById('numberOfNumbers').value);
    const interval = parseInt(document.getElementById('interval').value);
    const outputDiv = document.getElementById('output');
    
    let sum = 0;
    let outputText = '<p>Números Naturais:</p>';
  
    for (let i = 1, count = 0; count < numberOfNumbers; i += interval, count++) {
      sum += i;
      outputText += `<p>${i}</p>`;
    }

    outputText += `<p>Soma Acumulada: ${sum}</p>`;
    outputDiv.innerHTML = outputText;
  }
  