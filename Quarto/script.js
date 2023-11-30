document.getElementById('submit').addEventListener('click', function() {
    var answer = document.getElementById('answer').value;
    if (answer === '25') {
      alert('Resposta correta!');
    } else {
      alert('Resposta errada. A resposta correta é 25.');
    }
   });
   