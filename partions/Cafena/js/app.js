'use strict';

const body = document.querySelector('.page__body');
const menu = document.querySelector('.header__navigation');
const btnBurger = document.querySelector('.header__open');
const btnClose = document.querySelector('.header__close');
const overlay = document.querySelector('.header__overlay');
const links = document.querySelectorAll('.header__link');

const burgerOpen = () => {
  body.classList.add('scroll-none');
  menu.classList.add('header--visible');
  btnClose.classList.add('header__close--visible');
  overlay.classList.add('header__overlay--active');
  links.forEach(item => {
    item.addEventListener('click', () => {
      burgerClose();
    });
  });
}

const burgerClose = () => {
  body.classList.remove('scroll-none');
  menu.classList.remove('header--visible');
  btnClose.classList.remove('header__close--visible');
  overlay.classList.remove('header__overlay--active');
}

btnBurger.addEventListener('click', () => {
  burgerOpen();
});
btnClose.addEventListener('click', () => {
  burgerClose();
});
overlay.addEventListener('click', () => {
  burgerClose();
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new AirDatepicker('#airdatepicker', {
  autoClose: true,
  locale: {
    dateFormat: 'dd/MM/yyyy',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  }
});