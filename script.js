const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// ACESSIBILIDADE - TAMANHO DA FONTE
let fontSize = 100;

const increaseFont = document.getElementById('increaseFont');
const decreaseFont = document.getElementById('decreaseFont');

if (increaseFont) {
  increaseFont.addEventListener('click', () => {
    fontSize += 10;
    document.body.style.fontSize = fontSize + '%';
  });
}

if (decreaseFont) {
  decreaseFont.addEventListener('click', () => {
    fontSize = Math.max(80, fontSize - 10);
    document.body.style.fontSize = fontSize + '%';
  });
}
}

// MODO ESCURO
const toggleTheme = document.getElementById('toggleTheme');

if (toggleTheme) {
  toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      toggleTheme.textContent = '☀️';
    } else {
      toggleTheme.textContent = '🌙';
    }
  });
}

// SCROLL SUAVE FECHANDO MENU
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});