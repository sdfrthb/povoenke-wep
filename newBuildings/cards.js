const SWIPER_HOVER_CONTAINER_CLASS = 'swiper__hover-section__container';
const SWIPER_CLASS = '.swiper';
const SWIPER_WRAPPER_CLASS = '.swiper-wrapper';
const SWIPER_SLIDE_CLASS = '.swiper-slide';
const RC_CARDS_MIN_CLASS = 'rc-card-min';
const RC_CARDS_MIN_CONTENT_CLASS = '.rc-cards-min-container__content';

const WINDOW_WIDTH = document.body.clientWidth;
const TOUCH_SCREEN = 660;

const container = document.querySelector(RC_CARDS_MIN_CONTENT_CLASS);

function createNewCard(cardId) {
    const card = document.createElement('div');
    card.classList.add(RC_CARDS_MIN_CLASS);
    card.classList.add('swiper-slide');
    card.innerHTML = `
        <div class="rc-card__image">
            <div class="rc-card__image__logo">
                <img
                    class="rc-logo"
                    src="../assets/logo.png"
                    alt="residential complex description"
                >
                
                <div class="rc-card__image__logo__content">
                    <p class="title__light title__white no-whitespace">ГК Гранель</p>
                    <p class="title__light title__gray no-whitespace">234 объекта</p>
                </div>
            </div>
            <!-- Slider main container  -->
            <!-- Класс свайпера мы определяем уникальный, чтобы в последствии инициализировать его отдельно каждый  -->
            <div class="swiper ${cardId}">
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide">
                        <div class="rc-card__image__rc">
                            <img src="../assets/rc.png" alt="residential complex description">
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="rc-card__image__rc">
                            <img src="../assets/rc-2.png" alt="residential complex description">
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="rc-card__image__rc">
                            <img src="../assets/rc.png" alt="residential complex description">
                        </div>
                    </div>
                </div>
    
                <div id="${cardId}-new-buildings-pagination" class="swiper-pagination-new-buildings swiper-pagination ${cardId}-new-buildings-pagination"></div>
            </div>
        </div>

        <div class="rc-card__content">
            <div class="rc-card__content__title">
                <p class="title__medium">
                    ЖК Новая Рига
                </p>
    
                <div class="button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.0587 4.44659C17.9181 2.6224 14.7346 2.95052 12.7698 4.97783L12.0003 5.77078L11.2308 4.97783C9.26987 2.95052 6.08243 2.6224 3.94185 4.44659C1.48877 6.5403 1.35987 10.298 3.55514 12.5675L11.1136 20.3721C11.6019 20.876 12.3948 20.876 12.8831 20.3721L20.4415 12.5675C22.6407 10.298 22.5118 6.5403 20.0587 4.44659Z" fill="#2A547E" fill-opacity="0.13"/>
                    </svg>
                </div>
            </div>
    
            <div class="horizontal gap-2">
                <p class="title__light title__gray">
                    Рассказовка
                </p>
                <div class="horizontal building-info__metro__on-foot">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.24847 3.83362C9.93848 3.83362 10.4983 3.2738 10.4983 2.5838C10.4983 1.8938 9.93848 1.33398 9.24847 1.33398C8.55847 1.33398 7.99866 1.8938 7.99866 2.5838C7.99866 3.2738 8.55847 3.83362 9.24847 3.83362ZM11.7091 7.71586L11.1024 7.40862L10.8498 6.6431C10.467 5.48181 9.39949 4.66943 8.18873 4.66683C7.25137 4.66423 6.73322 4.92981 5.7594 5.32298C5.19698 5.54951 4.73611 5.97914 4.46532 6.52593L4.29087 6.88005C4.08777 7.29145 4.25181 7.79137 4.6606 7.99707C5.0668 8.20277 5.56151 8.03613 5.76721 7.62473L5.94167 7.27062C6.0328 7.08835 6.18382 6.94514 6.37129 6.86963L7.06911 6.58842L6.67333 8.16892C6.53793 8.71051 6.68375 9.28594 7.06129 9.69995L8.62096 11.4028C8.80843 11.6085 8.94123 11.8559 9.00893 12.1241L9.48542 14.0326C9.59738 14.4779 10.0504 14.7513 10.4957 14.6393C10.9409 14.5274 11.2143 14.0743 11.1024 13.6291L10.5243 11.3117C10.4566 11.0435 10.3238 10.7935 10.1364 10.5904L8.95164 9.29636L9.39949 7.50756L9.5427 7.93718C9.6807 8.35639 9.97753 8.7027 10.3681 8.90058L10.9748 9.20783C11.381 9.41353 11.8757 9.24689 12.0814 8.83549C12.2819 8.4267 12.1178 7.92156 11.7091 7.71586ZM5.74899 11.3794C5.66567 11.5903 5.54068 11.7804 5.37925 11.9392L4.07736 13.2437C3.75188 13.5692 3.75188 14.0977 4.07736 14.4232C4.40283 14.7487 4.92879 14.7487 5.25427 14.4232L6.80092 12.8766C6.95975 12.7177 7.08473 12.5277 7.17065 12.3168L7.52216 11.4367C6.08227 9.86659 6.5145 10.3483 6.28797 10.0384L5.74899 11.3794Z" fill="#173B5E" fill-opacity="0.35"/>
                    </svg>
                    <p class="title__light title__gray">
                        10 мин
                    </p>
                </div>
            </div>
    
            <div class="horizontal gap-2">
                <div class="label">
                    Скидка 10%
                </div>
                <div class="label">
                    0Р оформление
                </div>
                <div class="label">
                    С отделкой
                </div>
            </div>
        </div>
    `;

    container.appendChild(card);

    new Swiper(`.${cardId}`, {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: `#${cardId}-new-buildings-pagination`,
        },
    });
}

// С помощью цикла создаем и добавляем карточки жк в размере COUNT_OF_CARDS;
const COUNT_OF_CARDS = 9;

for (let cardId = 0; cardId < COUNT_OF_CARDS; cardId++) {
    createNewCard(`swiper-${cardId}`);
}

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

window.addEventListener('reset', () => {
    const buildingsPaginations = document.querySelectorAll('.swiper-pagination-new-buildings');

    if (document.body.clientWidth < TOUCH_SCREEN) {
        buildingsPaginations.forEach((buildingsPagination) => {
            buildingsPagination.classList.remove('swiper-pagination');
        });
    } else {
        buildingsPaginations.forEach((buildingsPagination) => {
            buildingsPagination.classList.add('swiper-pagination');
        });
    }
});

const buildingsPaginations = document.querySelectorAll('.swiper-pagination-new-buildings');

if (document.body.clientWidth < TOUCH_SCREEN) {
    buildingsPaginations.forEach((buildingsPagination) => {
        buildingsPagination.classList.remove('swiper-pagination');
    });
} else {
    buildingsPaginations.forEach((buildingsPagination) => {
        buildingsPagination.classList.add('swiper-pagination');
    });
}


// Свайпер для контейнера с карточками


if (document.body.clientWidth > TOUCH_SCREEN) {
    const minSwiper = new Swiper(`.rc-cards-min-swiper`, {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 3,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // Добавляем обработчики для навигационных кнопок
    const nextButton = document.querySelector(".swiper-button-next");

    nextButton.addEventListener("click", function () {
        const slidesToStopBeforeEnd = 6; // Сколько слайдов остановить перед концом
        const currentIndex = minSwiper.activeIndex;

        if (minSwiper.slides.length > slidesToStopBeforeEnd && minSwiper.slides.length - currentIndex < slidesToStopBeforeEnd) {
            minSwiper.allowSlideNext = false;
        } else {
            minSwiper.allowSlideNext = true;
        }
    });
}