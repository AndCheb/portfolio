'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // dropdown

  const btnMenu = document.querySelectorAll('.menu__button');
  const menuSubList = document.querySelectorAll('.menu__sublist');

  let currentBtn;

  btnMenu.forEach((item, i) => {
    item.addEventListener('click', e => {
      currentBtn = e.target;
      menuSubList.forEach((element, j) => {
        if (i !== j) {
          element.classList.remove('menu__sublist--active');
        }
      });
      item.closest('.menu-list-item')?.querySelector('.menu__sublist').classList.toggle('menu__sublist--active');
    });
  });

  document.addEventListener('click', e => {
    menuSubList.forEach((item, i) => {
      if (e.target !== currentBtn) {
        item.classList.remove('menu__sublist--active');
      }
    });
  });

  // burger

  const btnBurger = document.querySelector('.burger__open');
  const btnClose = document.querySelector('.burger__close');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('.page__body');
  const overlay = document.querySelector('.overlay');
  const links = document.querySelectorAll('.point');

  const burgerOpen = () => {
    body.classList.add('scroll-none');
    menu.classList.add('menu--visible');
    btnClose.classList.add('burger__close--visible');
    overlay.classList.add('overlay--active');
    links.forEach(item => {
      item.addEventListener('click', () => {
        burgerClose();
      });
    });
  }

  const burgerClose = () => {
    body.classList.remove('scroll-none');
    menu.classList.remove('menu--visible');
    btnClose.classList.remove('burger__close--visible');
    overlay.classList.remove('overlay--active');
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

  // stream

  const btnStream = document.querySelectorAll('.stream__button');
  const image = document.querySelector('.stream__img');

  btnStream.forEach((item, index) => {
    item.addEventListener('click', () => {
      btnStream.forEach(el => {
        if (el !== item) {
          el.classList.remove('stream__button--active');
        }
      });
      item.classList.add('stream__button--active');
      image.src = `./img/streams/live-${index + 1}.webp`
    });
  });

});

