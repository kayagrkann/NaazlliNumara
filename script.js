
const wordsDisplay = document.getElementById('words');
const words = ["Lütfen", "Numaranı", "Alabilir miyim", "Nazlıı"];
const buttons = [
  document.getElementById('btn1'),
  document.getElementById('btn2'),
  document.getElementById('btn3'),
  document.getElementById('btn4')
];

buttons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const span = document.createElement('span');
    span.className = 'word-item';
    span.textContent = words[i];

    if (i === words.length - 1) {
      span.classList.add('final');
    }

    wordsDisplay.appendChild(span);

    if (buttons[i + 1]) {
      buttons[i + 1].style.display = 'block';
    }

    btn.style.display = 'none';
  });
});
