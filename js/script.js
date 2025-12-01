'use strict';

//Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

//When hamburger-menu is clicked
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

//Click at outside sidebar to hide the nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
