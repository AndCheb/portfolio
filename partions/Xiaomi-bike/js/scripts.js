'use strict';

const btn = document.querySelector('.button-order');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modals');
const modalClose = document.querySelector('.modal-close');
const overlay = document.querySelector('.modal-overlay');
const fixBlocks = document.querySelector('.fix-block');
const body = document.querySelector('.page__body');
const html = document.querySelector('.page');
const popup = document.querySelector('.modal-window');
const inputFocus = document.querySelector('.input-focus');

let previousActiveElement;

btn.addEventListener('click', () => {
  open();
  disableScroll();

  previousActiveElement = document.activeElement;  // последний активный элемент

  Array.from(body.children).forEach((child) => {   // всё кроме попап лишается фокуса
    if (child !== popup) {
      child.inert = true;
    }
  });
});

overlay.addEventListener('click', (evn) => {       // нажатие на оверлей
  if (evn.target == modalOverlay) {
    close();
    enableScroll()
  }
});

modalClose.addEventListener('click', () => {
  close();
  enableScroll()
});

document.addEventListener('keydown', (evn) => {
  if (evn.key === 'Escape' && modal.classList.contains('modal--visible')) {
    close();
    enableScroll()
  }
});

function open() {
  modalOverlay.classList.add('modal-overlay--visible');
  modal.classList.add('modal--visible');
  html.classList.remove('page');                           // удаляем плавную прокрутку

  setTimeout(() => {
    inputFocus.focus();
  }, 300);
}

function close() {
  modalOverlay.classList.remove('modal-overlay--visible');
  modal.classList.remove('modal--visible');

  setTimeout(() => {
    previousActiveElement.focus();
  }, 300);
}



///////////////////////////////////

function disableScroll() {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  let pagePosition = window.scrollY;

  fixBlocks.paddingRight = paddingOffset;

  body.style.paddingRight = paddingOffset;
  body.classList.add('disable-scroll');
  body.dataset.position = pagePosition;
  body.style.top = -pagePosition + 'px';
}

function enableScroll() {
  let pagePosition = parseInt(document.body.dataset.position, 10);
  body.style.top = 'auto';
  body.classList.remove('disable-scroll');

  fixBlocks.paddingRight = '0px';

  body.style.paddingRight = '0px';
  window.scroll({ top: pagePosition, left: 0 });

  html.classList.add('page');                         // возвращаем плавную прокрутку

  Array.from(body.children).forEach((child) => {      // глобально возвращаем фокус
      child.inert = false;
  });
}


/// slider

const firstSlide = document.querySelectorAll(".hero__picture");
const firstDots = document.querySelectorAll(".first-dots");
const secondSlide = document.querySelectorAll(".photo__picture");
const secondDots = document.querySelectorAll(".second-dots");

let index = 0;
let num = 0;

const activeFirstSlide = n => {
  for(let slide of firstSlide) {
    slide.classList.remove("hero-active");
  }
  firstSlide[n].classList.add("hero-active");
}

const activeFirstDot = n => {
  for(let dot of firstDots) {
    dot.classList.remove("dots-active");
  }
  firstDots[n].classList.add("dots-active");
}

const currentSlide = i => {
  activeFirstSlide(i);
  activeFirstDot(i);
}

const nextSlide = () => {
  if (index == firstSlide.length - 1) {
    index = 0;
    currentSlide(index);
  } else {
    index++;
    currentSlide(index);
  }
}

firstDots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    currentSlide(index);
  })
})

/////

const activeSecondSlide = n => {
  for(let slide of secondSlide) {
    slide.classList.remove("photo-active");
  }
  secondSlide[n].classList.add("photo-active");
}

const activeSecondDot = n => {
  for(let dot of secondDots) {
    dot.classList.remove("dots-active");
  }
  secondDots[n].classList.add("dots-active");
}

const currentSecondSlide = i => {
  activeSecondSlide(i);
  activeSecondDot(i);
}

const nextSecondSlide = () => {
  if (num == secondSlide.length - 1) {
    num = 0;
    currentSecondSlide(num);
  } else {
    num++;
    currentSecondSlide(num);
  }
}

secondDots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    num = indexDot;
    currentSecondSlide(num);
  })
})

setInterval(nextSlide, 5500);
setInterval(nextSecondSlide, 5500);

///

const btnWhite = document.querySelector(".order__button--white");
const btnGray = document.querySelector(".order__button--gray");
const btnRed = document.querySelector(".order__button--red");
const bikeWhite = document.getElementById("white");
const bikeGray = document.getElementById("gray");
const bikeRed = document.getElementById("red");

btnWhite.addEventListener("click", () => {
  bikeWhite.classList.add("order-active");
  bikeGray.classList.remove("order-active");
  bikeRed.classList.remove("order-active");
});

btnGray.addEventListener("click", () => {
  bikeWhite.classList.remove("order-active");
  bikeGray.classList.add("order-active");
  bikeRed.classList.remove("order-active");
});

btnRed.addEventListener("click", () => {
  bikeWhite.classList.remove("order-active");
  bikeGray.classList.remove("order-active");
  bikeRed.classList.add("order-active");
});
