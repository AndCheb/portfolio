'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // --dropdown

  const menuBtn = document.querySelectorAll('.menu__button');
  const dropList = document.querySelectorAll('.menu__drop-list');

  menuBtn.forEach((el, i) => {
    el.addEventListener('click', evn => {
      let currentBtn = evn.currentTarget;
      let drop = currentBtn.closest('.menu__item').querySelector('.menu__drop-list');

      menuBtn.forEach(el => {
        if (el !== currentBtn) {
          el.closest('.menu__item').querySelector('.menu__drop-list').classList.remove('active');
          el.querySelector('.menu__arrow').classList.remove('menu__arrow--blue');
          el.classList.remove('menu__button--blue');
        }
      });
      drop.classList.toggle('active');
      currentBtn.querySelector('.menu__arrow').classList.toggle('menu__arrow--blue');
      currentBtn.classList.toggle('menu__button--blue');
    });
  });

  document.addEventListener('click', evn => {
    if (!evn.target.closest('.menu__item')?.querySelector('.menu__button')) {
      dropList.forEach(el => {
        el.classList.remove('active');
        menuBtn.forEach(item => {
          item.querySelector('.menu__arrow').classList.remove('menu__arrow--blue');
          item.classList.remove('menu__button--blue');
        })
      });
    }
  });

  // --burger

  const burgerBtn = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const burgerCloseBtn = document.querySelector('.burger__close');
  const body = document.querySelector('.page');
  const overlay = document.querySelector('.overlay');

  const burgerOpen = () => {
    body.classList.add('scroll-none');
    menu.classList.add('menu--visible');
    burgerCloseBtn.classList.add('burger-close--visible');
    overlay.classList.add('overlay--active');
  }

  const burgerClose = () => {
    body.classList.remove('scroll-none');
    menu.classList.remove('menu--visible');
    burgerCloseBtn.classList.remove('burger-close--visible');
    overlay.classList.remove('overlay--active');
  }

  burgerBtn.addEventListener('click', () => {
    burgerOpen();
  });

  burgerCloseBtn.addEventListener('click', () => {
    burgerClose();
  });

  overlay.addEventListener('click', () => {
    burgerClose();
  });

  // --swiper

  let swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    initialSlide: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

});



