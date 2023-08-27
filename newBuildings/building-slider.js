// Инициализируем Swiper слайдер

new Swiper(`.building-slider`, {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: '.building-slider__button-prev',
        prevEl: '.building-slider__button-next',
    },

    thumbs: {
        el: '.building-slider__mini-version',
        slidesPreview: 5,
    }
});

const WINDOW_WIDTH = document.body.clientWidth;
const TOUCH_SCREEN = 660;
const MAX_COUNT_OF_SLIDES = 7;
const MAX_LAST_INDEX_OF_SLIDES = 6;
const BUILDING_IMAGE_RC_MINI_CLASS = '.new-buildings__image__rc__mini';
const BUILDING_IMAGE_RC_MINI_ACTIVE_CLASS = 'new-buildings__image__rc__mini__active';

// Добавляем минислайдер таббар, для интерактивной галлереи картинок

const buildingSwiper = document.querySelector('.building-slider');
const buildingWrapper = buildingSwiper && buildingSwiper.querySelector('.swiper-wrapper');
const swiper = document.querySelector('.building-slider').swiper;
const miniSwiper = document.querySelector('.building-slider__mini-version');
const miniWrapper = miniSwiper && miniSwiper.querySelector('.swiper-wrapper');
const miniWrapperSlides = miniWrapper && miniWrapper.querySelectorAll('.swiper-slide__mini');

swiper && swiper.on('activeIndexChange', function () {
    if (miniWrapperSlides && swiper.activeIndex < MAX_COUNT_OF_SLIDES) {
        miniWrapperSlides.forEach((slide) => {
            slide
                .querySelector(BUILDING_IMAGE_RC_MINI_CLASS)
                .classList.remove(BUILDING_IMAGE_RC_MINI_ACTIVE_CLASS);
        });

        miniWrapperSlides[swiper.activeIndex]
            .querySelector(BUILDING_IMAGE_RC_MINI_CLASS)
            .classList.add(BUILDING_IMAGE_RC_MINI_ACTIVE_CLASS);
    }
});

miniWrapperSlides && miniWrapperSlides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        swiper.slideTo(index);
    });
})

// Модальное окно building-slider-container__modal__container

const MODAL_CONTAINER = '.building-slider-container__modal__container';
const MODAL_CLOSE = '.building-slider-container__modal__close';
const modalContainer = document.querySelector(MODAL_CONTAINER);
const modalCloseButton = document.querySelector(MODAL_CLOSE);

let isModalOpen = false;

function handleOpenModalScreen() {
    isModalOpen = !isModalOpen;

    if (isModalOpen) {
        modalContainer.style.display = 'none';
    } else {
        modalContainer.style.display = 'block';
    }
}

modalCloseButton.addEventListener('click', () => {
    handleOpenModalScreen();
})

// На MAX_COUNT_OF_SLIDES слайде мини слайдбара показываем оставшееся количество изображений

const counter = document.createElement('div');
const slideWithCounter = miniWrapperSlides && miniWrapperSlides[MAX_LAST_INDEX_OF_SLIDES];

if (miniWrapperSlides && miniWrapperSlides.length > MAX_LAST_INDEX_OF_SLIDES) {

    counter.className = 'building-slider__count-of-images-count';
    counter.innerHTML = `
        <p class="title__light title__gray">
            + ${miniWrapperSlides.length - MAX_COUNT_OF_SLIDES}
        </p>
    `;

    slideWithCounter.appendChild(counter);
    slideWithCounter.addEventListener('click', () => {
        handleOpenModalScreen();
    });

    if (WINDOW_WIDTH < TOUCH_SCREEN) {
        document.querySelector('.building-slider-container').addEventListener('click', (event) => {
            handleOpenModalScreen();
        });
    }
}

miniWrapperSlides && miniWrapperSlides.forEach((slide, index) => {
    if (index > MAX_LAST_INDEX_OF_SLIDES)
        miniWrapper.removeChild(slide);
});


