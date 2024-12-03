document.addEventListener('DOMContentLoaded', function() {
  const generateButton = document.getElementById('generate');
  generateButton.addEventListener('click', generateNumbers);
});

function generateNumbers() {
  // 기존 애니메이션 클래스 제거
  document.querySelectorAll('.number, .powerball').forEach(element => {
    element.classList.remove('animate');
  });

  // Generate 5 main numbers (1-69)
  const mainNumbers = [];
  while (mainNumbers.length < 5) {
    const num = Math.floor(Math.random() * 69) + 1;
    if (!mainNumbers.includes(num)) {
      mainNumbers.push(num);
    }
  }
  mainNumbers.sort((a, b) => a - b);

  // Generate powerball number (1-26)
  const powerballNumber = Math.floor(Math.random() * 26) + 1;

  // Update display with animation
  const numberElements = document.querySelectorAll('.number');
  numberElements.forEach((element, index) => {
    // Reset the animation
    element.style.animation = 'none';
    element.offsetHeight; // Trigger reflow
    element.style.animation = null;
    
    // Add animation class with delay
    setTimeout(() => {
      element.textContent = mainNumbers[index];
      element.classList.add('animate');
    }, index * 200);
  });

  const powerballElement = document.querySelector('.powerball');
  setTimeout(() => {
    // Reset the animation
    powerballElement.style.animation = 'none';
    powerballElement.offsetHeight; // Trigger reflow
    powerballElement.style.animation = null;
    
    powerballElement.textContent = powerballNumber;
    powerballElement.classList.add('animate');
  }, 1000); // Start after all main numbers
}
