import SlimSelect from "slim-select";
import AirDatepicker from "air-datepicker";
import Swiper from "swiper";

const body = document.body;
const menuNav = document.querySelector(".menu__nav");
const menuList = document.querySelector(".menu__list");
const menuToggler = document.querySelector(".menu__toggler");
const menuButton = document.querySelector(".menu__button");
const video = document.querySelector(".description__video");
const modal = document.querySelector(".modal");
const modalOpen = document.querySelector(".modal__open");
const modalClose = document.querySelector(".modal__close");

const blogContainer = document.querySelector(".blog__container");
const blogArticles = document.querySelector(".blog__articles");
const blogArticle = document.querySelectorAll(".blog__article");

const photosContainer = document.querySelector(".photos__container");
const photosGallery = document.querySelector(".photos__gallery");
const photosItems = document.querySelectorAll(".photos__item");

const windowWidth750 = window.matchMedia("(max-width: 750px)");
const windowWidth600 = window.matchMedia("(max-width: 600px)");

let sliderActive = false;
let photosSliderActive = false;

function burgerClose() {
    menuButton.classList.remove("menu__button--active");
    menuNav.classList.remove("menu__nav--open");
    body.classList.remove("scroll-none");
}

function burgerToggle() {
    menuButton.classList.toggle("menu__button--active");
    menuNav.classList.toggle("menu__nav--open");
    body.classList.toggle("scroll-none");
}

menuToggler.addEventListener("click", burgerToggle);

menuList.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu__link")) {
        burgerClose();
    }
});

// form

new SlimSelect({
    select: "#selectElement",
});

new SlimSelect({
    select: "#selectElement1",
});

new AirDatepicker("#calendar", {
    isMobile: true,
    autoClose: true,
    range: true,
    multipleDatesSeparator: " - ",
    navTitles: {
        days(dp) {
            if (dp.selectedDates.length) {
                let date = dp.selectedDates[0];
                return `<small>
                   Вы выбрали  ${dp.formatDate(date, "dd MMMM yyyy")}
                </small>`;
            }

            return "Выберите дату";
        },
    },
});

// video

function closeModalWindow() {
    modal.close();
    video.pause();
    body.classList.remove("blur");
    body.classList.remove("scroll-none");
}

function openModalWindow() {
    modal.showModal();
    video.setAttribute("controls", "controls");
    body.classList.add("blur");
    body.classList.add("scroll-none");
    video.play();
}

modalOpen.addEventListener("click", openModalWindow);
modalClose.addEventListener("click", closeModalWindow);

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModalWindow();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModalWindow();
    }
});

// swiper

const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    freeMode: true,
});

// blog

const addSwiperClasses = (value) => {
    if (value) {
        blogContainer.classList.add("blog__swiper");
        blogArticles.classList.add("swiper-wrapper");
        blogArticle.forEach((item) => {
            item.classList.add("swiper-slide");
        });
    } else {
        blogContainer.classList.remove("blog__swiper");
        blogArticles.classList.remove("swiper-wrapper");
        blogArticle.forEach((item) => {
            item.classList.remove("swiper-slide");
        });
    }
};

const createSwiper = (suitableWidth) => {
    addSwiperClasses(true);

    let blogSwiper = new Swiper(".blog__swiper", {
        slidesPerView: "auto",
        freeMode: true,
    });

    if (!suitableWidth) {
        blogSwiper.destroy();
        addSwiperClasses(false);
        sliderActive = false;
    }
};

if (windowWidth600.matches && !sliderActive) {
    createSwiper(true);
}

windowWidth600.addEventListener("change", () => {
    if (windowWidth600.matches && !sliderActive) {
        createSwiper(true);
    } else {
        createSwiper(false);
    }
});

// photos

const addPhotosSwiperClasses = (value) => {
    if (value) {
        photosContainer.classList.add("photos__swiper");
        photosGallery.classList.add("swiper-wrapper");
        photosItems.forEach((item) => {
            item.classList.add("swiper-slide");
        });
    } else {
        photosContainer.classList.remove("photos__swiper");
        photosGallery.classList.remove("swiper-wrapper");
        photosItems.forEach((item) => {
            item.classList.remove("swiper-slide");
        });
    }
};

const createPhotosSwiper = (suitableWidth) => {
    addPhotosSwiperClasses(true);

    let photosSwiper = new Swiper(".photos__swiper", {
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 20,
    });

    if (!suitableWidth) {
        photosSwiper.destroy();
        addPhotosSwiperClasses(false);
        photosSliderActive = false;
    }
};

if (windowWidth750.matches && !photosSliderActive) {
    createPhotosSwiper(true);
}

windowWidth750.addEventListener("change", () => {
    if (windowWidth750.matches && !photosSliderActive) {
        createPhotosSwiper(true);
    } else {
        createPhotosSwiper(false);
    }
});
