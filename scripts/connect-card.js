const SWIPER_HOVER_CONTAINER_CLASS = 'swiper__hover-section__container';
const SWIPER_CLASS = '.swiper';
const SWIPER_WRAPPER_CLASS = '.swiper-wrapper';
const SWIPER_SLIDE_CLASS = '.swiper-slide';
const RC_CARD_CLASS = '.rc-card';
const RC_CARD_CONTENT_CLASS = '.rc-card__content';
const RC_IMAGE_CLASS = '.rc-card__image__rc';

const WINDOW_WIDTH = document.body.clientWidth;
const TOUCH_SCREEN = 660;

new Swiper(`.swiper`, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: `.swiper-pagination`,
    },
});

// Добавляем смену изображений при наведении на Swiper
const swiperContainer = document.querySelectorAll(SWIPER_CLASS);

if (swiperContainer && swiperContainer.length && WINDOW_WIDTH > TOUCH_SCREEN) {
    swiperContainer.forEach((container) => {
        // Берем wrapper
        const swiperWrapper = container.querySelector(SWIPER_WRAPPER_CLASS);
        // Берем список со слайдами и считаем их количество, размер области hoverSection
        const swiperSlides = swiperWrapper.querySelectorAll(SWIPER_SLIDE_CLASS);
        const countOfSlides = swiperSlides.length;
        const hoverSectionWidth = swiperWrapper.clientWidth / countOfSlides;

        // Задаем контейнер для наводимой секции
        const hoverSectionContainer = document.createElement('div');
        hoverSectionContainer.style.width = `${swiperWrapper.clientWidth}px`;
        hoverSectionContainer.style.height = `${swiperWrapper.clientHeight}px`;
        hoverSectionContainer.className = SWIPER_HOVER_CONTAINER_CLASS;

        // Добавляем countOfSlides равнодлинных секций hoverSection для наведения
        for (let section = 0; section < countOfSlides; section++) {
            const hoverSection = document.createElement('div');
            hoverSection.style.width = `${hoverSectionWidth}px`;
            hoverSection.style.height = `${swiperWrapper.clientHeight}px`;

            hoverSection.addEventListener('mouseover', () => {
                container.swiper.slideTo(section);
            });

            hoverSectionContainer.appendChild(hoverSection);
        }

        container.appendChild(hoverSectionContainer);
    })
}


// rc-card: При наведении на контент карточки rc-card - картинка уменьшается
const listOfCards = document.querySelectorAll(RC_CARD_CLASS);

listOfCards && listOfCards.forEach((card) => {
    const content = card.querySelector(RC_CARD_CONTENT_CLASS);
    const swiper = card.querySelector(SWIPER_CLASS);
    const images = card.querySelectorAll(RC_IMAGE_CLASS);

    content.addEventListener('mouseover', () => {
        if (WINDOW_WIDTH > TOUCH_SCREEN) {
            swiper.style.height = '200px';
            images.forEach((image) => {
                image.style.height = '200px';
            });
        }
    });

    content.addEventListener('mouseout', () => {
        swiper.style.height = '272px';
        images.forEach((image) => {
            image.style.height = '272px';
        })
    });
});
