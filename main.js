onload = () => {
  document.body.classList.remove("not-loaded");

  const text = "Ikan Sepat Lagi Nyebat LOVE U Manis";
  const titleElement = document.getElementById('title');
  const cursor = document.getElementById('cursor');
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      titleElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();

  // Cursor blinking effect
  setInterval(() => {
    cursor.style.visibility = (cursor.style.visibility === 'visible') ? 'hidden' : 'visible';
  }, 500);
};


