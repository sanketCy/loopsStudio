const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');

menuBtn.addEventListener('click', navToggle);

function navToggle() {
  menuBtn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}
