//--------- Scroll Animation

let observer = new IntersectionObserver((start) => {
    start.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("vis");
        };
  });
}, {
    root: document.querySelector('#viewport'),
    threshold: [0.3],
});

document.querySelectorAll(".nonvis").forEach(item => {
    observer.observe(item);
});

//------- Dropdown List
let dropDownList = document.querySelector(".header__dropdown-list");

let dropDownButton = document.querySelector(".header__dropdown-button");

let dropDownIcon = document.querySelector(".header__dropdown-icon");

dropDownButton.onclick = function () {
    if (dropDownList.classList.contains("header__dropdown-list_active")) {
        dropDownList.classList.remove("header__dropdown-list_active");
        dropDownIcon.classList.remove("header__dropdown-icon_active");
    } else {
        dropDownList.classList.add("header__dropdown-list_active");
        dropDownIcon.classList.add("header__dropdown-icon_active");
    }
};

window.onclick = function (event) {
    if (!event.target.matches(".header__dropdown-button")) {
        dropDownList.classList.remove("header__dropdown-list_active");
        dropDownIcon.classList.remove("header__dropdown-icon_active");
    }
}

// -------------- Sliders

let sliderCont = document.querySelectorAll(".slider-container");

sliderCont.forEach(item => {
    let position = 0;
    let sliderTrack = item.querySelector(".slider-tracker");
    let btnNext = item.querySelector(".btn-next");
    let btnPrev = item.querySelector(".btn-prev");
    let slides = sliderTrack.querySelectorAll(".slide");
    let slidesCount = slides.length;
    let movePosition = sliderTrack.getBoundingClientRect().width;

    btnNext.onclick = () => {
        position -= movePosition;
        sliderTrack.style.transform = `translateX(${position}px)`;
        checkButton();
    };

    btnPrev.onclick = () => {
        position += movePosition;
        sliderTrack.style.transform = `translateX(${position}px)`;
        checkButton();
    };

    function checkButton() {

        if (position <= -(slidesCount - 1) * movePosition) {
            btnNext.classList.add("btn-hidden");
        } else {
            btnNext.classList.remove("btn-hidden");
        };

        if (position == 0) {
            btnPrev.classList.add("btn-hidden");
        } else {
            btnPrev.classList.remove("btn-hidden");
        };
    };

    checkButton();
});

let menuClose = document.querySelector('.menu__close');
let menuOpen = document.querySelector('.menu__open');
let menu = document.querySelector('.menu');

menuOpen.onclick = () => {menu.classList.add('menu_active')};
menuClose.onclick = () => { menu.classList.remove('menu_active') };

//--------------- Menu dropdown list

let menuDropDownList = document.querySelector(".menu__dropdown-list");

let menuDropDownButton = document.querySelector(".menu__dropdown-button");

let menuDropDownIcon = document.querySelector(".menu__dropdown-icon");

menuDropDownButton.onclick = function () {
    if (menuDropDownList.classList.contains("menu__dropdown-list_active")) {
        menuDropDownList.classList.remove("menu__dropdown-list_active");
        menuDropDownIcon.classList.remove("menu__dropdown-icon_active");
    } else {
        menuDropDownList.classList.add("menu__dropdown-list_active");
        menuDropDownIcon.classList.add("menu__dropdown-icon_active");
    }
};

window.onclick = function (event) {
    if (!event.target.matches(".menu__dropdown-button")) {
        menuDropDownList.classList.remove("menu__dropdown-list_active");
        menuDropDownIcon.classList.remove("menu__dropdown-icon_active");
    }
}