// app.js
const navLinks = document.querySelectorAll('a.nav-link');
const gameFrame = document.getElementById('gameFrame');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const url = link.href;
    gameFrame.src = url;
  });
});