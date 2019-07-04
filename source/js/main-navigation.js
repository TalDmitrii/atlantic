'use strict';

(function useNavigation () {
  var mainNav = document.querySelector('.main-navigation');
  var navToggle = document.querySelector('.main-navigation__toggle');
  var overlay = mainNav.querySelector('.main-navigation__overlay');

  mainNav.classList.remove('main-navigation--nojs');

  if (mainNav.classList.contains('main-navigation--opened')) {
    mainNav.classList.remove('main-navigation--opened');
    mainNav.classList.add('main-navigation--closed');
  }

  navToggle.addEventListener('click', function(){
    if (mainNav.classList.contains('main-navigation--closed')) {
      openMenu();

      overlay.addEventListener('click', closeMenu);

    } else {
      closeMenu();

      overlay.removeEventListener('click', closeMenu);
    }
  });

  function openMenu() {
    mainNav.classList.remove('main-navigation--closed');
    mainNav.classList.add('main-navigation--opened');
  }

  function closeMenu() {
    mainNav.classList.add('main-navigation--closed');
    mainNav.classList.remove('main-navigation--opened');
  }
})();