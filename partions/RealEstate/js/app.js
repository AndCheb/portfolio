'use strict';

document.addEventListener('DOMContentLoaded', () => {


  const body = document.querySelector('.page__body');
  const menu = document.querySelector('.menu');
  const btnBurger = document.querySelector('.menu__open');
  const btnClose = document.querySelector('.menu__close');
  const overlay = document.querySelector('.menu__overlay');
  const links = document.querySelectorAll('.menu__link');

  const burgerOpen = () => {
    body.classList.add('scroll-none');
    menu.classList.add('menu--visible');
    btnClose.classList.add('menu__close--visible');
    overlay.classList.add('menu__overlay--active');
    links.forEach(item => {
      item.addEventListener('click', () => {
        burgerClose();
      });
    });
  }

  const burgerClose = () => {
    body.classList.remove('scroll-none');
    menu.classList.remove('menu--visible');
    btnClose.classList.remove('menu__close--visible');
    overlay.classList.remove('menu__overlay--active');
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


  const btnDropMenu = document.querySelectorAll('.place__button');
  const btnDropOption = document.querySelectorAll('.dropdown__option');
  const drops = document.querySelectorAll('.dropdown');

  const selectOption = el => {
    document.querySelector('.opt').textContent = el.textContent;
  }

  btnDropMenu.forEach(item => {
    item.addEventListener('click', el => {
      let drop = el.currentTarget.closest('.place__item').querySelector('.dropdown');
      let btnCurrent = el.currentTarget.closest('.place__item').querySelector('.place__button');
      btnDropMenu.forEach(item => item.classList.remove('opt'));
      btnCurrent.classList.add('opt');
      drops.forEach(item => {
        if (item !== drop) {
          item.classList.remove('dropdown--active');
        }
      });
      drop.classList.toggle('dropdown--active');
    });
  });

  document.addEventListener('click', el => {
    if (!el.target.closest('.place__item-wrap')) {
      drops.forEach(el => {
        el.classList.remove('dropdown--active');
        btnDropMenu.forEach(item => item.classList.remove('opt'));
      });
    }
  });

  btnDropOption.forEach(item => {
    item.addEventListener('click', () => {
      selectOption(item);
      drops.forEach(el => el.classList.remove('dropdown--active'));
      btnDropMenu.forEach(item => item.classList.remove('opt'));
    });
  });


  const slider = document.querySelector('.mySwiper');

  let mySwiper;

  function mobileSlider() {
    if (window.innerWidth <= 1000 && slider.dataset.mobile == "false") {
      mySwiper = new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 20,
      });
      slider.dataset.mobile = "true";
    }

    if (window.innerWidth > 1000) {
      slider.dataset.mobile = "false";
      if (slider.classList.contains('swiper-initialized')) {
        mySwiper.destroy();
      }
    }
  };

  mobileSlider();

  window.addEventListener('resize', () => {
    mobileSlider();
  });


  const feedbackText = document.querySelectorAll('.feedback__text');
  const btnFeedback = document.querySelectorAll('.feedback__button');

  btnFeedback.forEach((el, i) => {
    el.addEventListener('click', () => {
      btnFeedback.forEach((item, index) => {
        item.classList.remove('feedback__button--black');
        feedbackText.forEach(el => {
          el.classList.add('d-none');
        })
      });
      feedbackText[i].classList.remove('d-none');
      el.classList.add('feedback__button--black');
    });
  });
});

