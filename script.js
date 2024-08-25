
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('.typing-text');
    const text = textElement.textContent;
    textElement.textContent = ''; // Clear the text initially
    let index = 0;
  
    function type() {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed here
      } else {
        setTimeout(() => {
          textElement.textContent = ''; // Clear the text
          index = 0; // Reset index to restart typing
          type(); // Restart typing
        }, 1000); // Adjust the delay before restarting the typing
      }
    }
  
    type();
  });
  