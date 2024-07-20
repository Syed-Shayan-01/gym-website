const navbarOpen = document.getElementById('navbar-open');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

navbarOpen.addEventListener('change', () => {
  if (navbarOpen.checked) {
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  } else {
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
});

const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});