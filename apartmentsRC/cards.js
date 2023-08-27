const SWIPER_HOVER_CONTAINER_CLASS = 'swiper__hover-section__container';
const SWIPER_CLASS = '.swiper';
const SWIPER_WRAPPER_CLASS = '.swiper-wrapper';
const SWIPER_SLIDE_CLASS = '.swiper-slide';
const RC_CARD_CLASS = '.rc-apartment';
const RC_CARD_CONTENT_CLASS = '.rc-apartment__content';
const RC_IMAGE_CLASS = '.rc-apartment__image__rc';

const WINDOW_WIDTH = document.body.clientWidth;
const TOUCH_SCREEN = 660;

const container = document.querySelector('.rc-apartments-container__content');

function createNewCard(cardId) {
    const card = document.createElement('div');
    card.className = 'rc-apartment';
    card.innerHTML = `
        <div class="rc-apartment__image">
            <!-- Slider main container  -->
            <!-- Класс свайпера мы определяем уникальный, чтобы в последствии инициализировать его отдельно каждый  -->
            <div class="swiper ${cardId}">
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide">
                        <div class="rc-apartment__image__rc">
                            <img src="../assets/scheme.png" alt="residential complex description">
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="rc-apartment__image__rc">
                            <img src="../assets/rc-2.png" alt="residential complex description">
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="rc-apartment__image__rc">
                            <img src="../assets/rc.png" alt="residential complex description">
                        </div>
                    </div>
                </div>

                <div class="swiper-pagination ${cardId}-pagination"></div>
            </div>
        </div>

        <div class="rc-apartment__content">
            <div class="">
                <div class="rc-apartment__content__title">
                    <p class="title__medium__bold">
                        ЖК Новая Рига
                    </p>

                    <p class="title__medium__bold">
                        5 000 000 р.
                    </p>
                </div>

                <div class="rc-apartment__content__title">
                    <p class="title__light title__gray">
                        Сдача в IV квартале 2022
                    </p>

                    <p class="title__light title__gray">
                        250 000 за м2
                    </p>
                </div>
            </div>

            <div class="horizontal gap-2 rc-apartment__content__labels">
                <div class="label">
                    Скидка 10%
                </div>
                <div class="label">
                    0Р оформление
                </div>
            </div>

            <div class="rc-apartment__content__list" >
                <div class="rc-apartment__content__list__row title__light">
                    <p class="title__light title__gray">
                        Этаж
                    </p>

                    <p class="title__light">
                        5
                    </p>
                </div>

                <div class="rc-apartment__content__list__row title__light">
                    <p class="title__light title__gray">
                        Площадь
                    </p>

                    <p class="title__light">
                        38м2 (Кухня 12м2)
                    </p>
                </div>

                <div class="rc-apartment__content__list__row title__light">
                    <p class="title__light title__gray">
                        Отделка
                    </p>

                    <p class="title__light">
                        Черновая
                    </p>
                </div>
            </div>

            <div class="rc-apartment__content__list__mobile horizontal gap-1">
                <p class="title__light">
                    Этаж 5
                </p>

                <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2" r="2" fill="#173B5E" fill-opacity="0.35"/>
                </svg>

                <p class="title__light">
                    Черновая
                </p>

                <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2" r="2" fill="#173B5E" fill-opacity="0.35"/>
                </svg>

                <p class="title__light">
                    IV кв.  2022
                </p>
            </div>

            <div class="rc-apartment__content__metro">
                <div class="rc-apartment__content__metro__item">
                    <a href="#" class="title__light title__link">
                        ЖК “Новая Рига”
                    </p>

                    <div class="apartment-info__metro__icons__item">
                        <div class="apartment-info__metro__icon-metro metro-icon__green">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5107 11.8002L11.7113 2.72656L8.49988 8.02861L5.30181 2.72656L1.48908 11.8002H0.371094V13.1751H6.12137V11.8002H5.26173L6.09465 9.53807L8.49988 13.2718L10.9051 9.53807L11.738 11.8002H10.8784V13.1751H16.6287V11.8002H15.5107Z" fill="#fff"/>
                            </svg>

                            <p class="title__small">
                                Филатов луг
                            </p>
                        </div>

                        <div class="apartment-info__metro__on-foot">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.74847 3.83362C10.4385 3.83362 10.9983 3.2738 10.9983 2.5838C10.9983 1.8938 10.4385 1.33398 9.74847 1.33398C9.05847 1.33398 8.49866 1.8938 8.49866 2.5838C8.49866 3.2738 9.05847 3.83362 9.74847 3.83362ZM12.2091 7.71586L11.6024 7.40862L11.3498 6.6431C10.967 5.48181 9.89949 4.66943 8.68873 4.66683C7.75137 4.66423 7.23322 4.92981 6.2594 5.32298C5.69698 5.54951 5.23611 5.97914 4.96532 6.52593L4.79087 6.88005C4.58777 7.29145 4.75181 7.79137 5.1606 7.99707C5.5668 8.20277 6.06151 8.03613 6.26721 7.62473L6.44167 7.27062C6.5328 7.08835 6.68382 6.94514 6.87129 6.86963L7.56911 6.58842L7.17333 8.16892C7.03793 8.71051 7.18375 9.28594 7.56129 9.69995L9.12096 11.4028C9.30843 11.6085 9.44123 11.8559 9.50893 12.1241L9.98542 14.0326C10.0974 14.4779 10.5504 14.7513 10.9957 14.6393C11.4409 14.5274 11.7143 14.0743 11.6024 13.6291L11.0243 11.3117C10.9566 11.0435 10.8238 10.7935 10.6364 10.5904L9.45164 9.29636L9.89949 7.50756L10.0427 7.93718C10.1807 8.35639 10.4775 8.7027 10.8681 8.90058L11.4748 9.20783C11.881 9.41353 12.3757 9.24689 12.5814 8.83549C12.7819 8.4267 12.6178 7.92156 12.2091 7.71586ZM6.24899 11.3794C6.16567 11.5903 6.04068 11.7804 5.87925 11.9392L4.57736 13.2437C4.25188 13.5692 4.25188 14.0977 4.57736 14.4232C4.90283 14.7487 5.42879 14.7487 5.75427 14.4232L7.30092 12.8766C7.45975 12.7177 7.58473 12.5277 7.67065 12.3168L8.02216 11.4367C6.58227 9.86659 7.0145 10.3483 6.78797 10.0384L6.24899 11.3794Z" fill="#143352" fill-opacity="0.65"/>
                            </svg>

                            <p class="title__small title__gray">
                                5 минут
                            </p>
                        </div>
                    </div>
                </div>

                <div class="horizontal gap-0">
                    <div class="rc-card__image__logo">
                        <img
                            class="rc-logo"
                            src="../assets/logo.png"
                            alt="residential complex description"
                        >
                    </div>

                    <div class="rc-apartment__content__metro__item">
                        <p class="title__light">ГК Гранель</p>
                        <a href="#" class="title__light title__link">234 объекта</a>
                    </div>
                </div>
            </div>

            <div class="rc-apartment__content__metro__mobile">
                <div class="apartment-info__metro__icons__item">
                    <div class="apartment-info__metro__icon-metro metro-icon__green">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5107 11.8002L11.7113 2.72656L8.49988 8.02861L5.30181 2.72656L1.48908 11.8002H0.371094V13.1751H6.12137V11.8002H5.26173L6.09465 9.53807L8.49988 13.2718L10.9051 9.53807L11.738 11.8002H10.8784V13.1751H16.6287V11.8002H15.5107Z" fill="#fff"/>
                        </svg>

                        <p class="title__light">
                            Филатов луг
                        </p>
                    </div>

                    <div class="apartment-info__metro__on-foot">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.74847 3.83362C10.4385 3.83362 10.9983 3.2738 10.9983 2.5838C10.9983 1.8938 10.4385 1.33398 9.74847 1.33398C9.05847 1.33398 8.49866 1.8938 8.49866 2.5838C8.49866 3.2738 9.05847 3.83362 9.74847 3.83362ZM12.2091 7.71586L11.6024 7.40862L11.3498 6.6431C10.967 5.48181 9.89949 4.66943 8.68873 4.66683C7.75137 4.66423 7.23322 4.92981 6.2594 5.32298C5.69698 5.54951 5.23611 5.97914 4.96532 6.52593L4.79087 6.88005C4.58777 7.29145 4.75181 7.79137 5.1606 7.99707C5.5668 8.20277 6.06151 8.03613 6.26721 7.62473L6.44167 7.27062C6.5328 7.08835 6.68382 6.94514 6.87129 6.86963L7.56911 6.58842L7.17333 8.16892C7.03793 8.71051 7.18375 9.28594 7.56129 9.69995L9.12096 11.4028C9.30843 11.6085 9.44123 11.8559 9.50893 12.1241L9.98542 14.0326C10.0974 14.4779 10.5504 14.7513 10.9957 14.6393C11.4409 14.5274 11.7143 14.0743 11.6024 13.6291L11.0243 11.3117C10.9566 11.0435 10.8238 10.7935 10.6364 10.5904L9.45164 9.29636L9.89949 7.50756L10.0427 7.93718C10.1807 8.35639 10.4775 8.7027 10.8681 8.90058L11.4748 9.20783C11.881 9.41353 12.3757 9.24689 12.5814 8.83549C12.7819 8.4267 12.6178 7.92156 12.2091 7.71586ZM6.24899 11.3794C6.16567 11.5903 6.04068 11.7804 5.87925 11.9392L4.57736 13.2437C4.25188 13.5692 4.25188 14.0977 4.57736 14.4232C4.90283 14.7487 5.42879 14.7487 5.75427 14.4232L7.30092 12.8766C7.45975 12.7177 7.58473 12.5277 7.67065 12.3168L8.02216 11.4367C6.58227 9.86659 7.0145 10.3483 6.78797 10.0384L6.24899 11.3794Z" fill="#143352" fill-opacity="0.65"/>
                        </svg>

                        <p class="title__light title__gray">
                            5 минут
                        </p>
                    </div>
                </div>
                <p class="title__light title__gray">ЖК "Новая Рига"</p>
                <p class="title__small title__gray">Застройщик Гранель</p>
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
            el: `.${cardId}-pagination`,
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
