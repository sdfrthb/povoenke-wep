const tabBarsDescriptionContainer = document.querySelectorAll('.apartment-description__tab-bar');
const tabBarsMortgageContainer = document.querySelectorAll('.apartment-mortgage__tab-bar');

[
    tabBarsDescriptionContainer,
    tabBarsMortgageContainer
].map((tabBarsContainer) =>
    tabBarsContainer.forEach((tabBarContainer) => {
        const tabBars = tabBarContainer.querySelectorAll('.apartment__tab-bar__item');

        tabBars.forEach((tabBar) => {
            tabBar.addEventListener('click', () => {
                tabBars.forEach((tabBarItem) => {
                    tabBarItem.classList.remove('apartment__tab-bar__item__active');
                });

                tabBar.classList.add('apartment__tab-bar__item__active');
            })
        });
    })
);

const aboutApartmentTab = document.querySelector('.apartment-tab__about-apartment');
const detailsTab = document.querySelector('.apartment-tab__details');
const apartmentDetails = document.querySelector('.apartment-description__details__paragraphs');

aboutApartmentTab.addEventListener('click', () => {
    apartmentDetails.innerHTML = `
        <p class="title__light">
            Жилой район «Саларьево парк» расположен в Новой Москве, в 6 километрах от МКАД по Киевскому шоссе.
            В пяти минутах пешком находится станция метро «Филатов Луг».
            ТРЦ «Саларис» и крупные торговые центры — «РИО», Metro Cash & Carry, «Леруа Мерлен» — всего в пяти минутах езды на машине.
        </p>
    `;
});

detailsTab.addEventListener('click', () => {
    apartmentDetails.innerHTML = `
        <div class="paragraph__details-container">
            <p class="title__extra-medium__bold">
                Жилой комплекс
            </p>

            <div class="paragraph__details__content">
                <div class="paragraph__details__row">
                    <div class="horizontal gap-6">
                        <p class="title__light">Характеристика</p>
                        <div class="dashed__gray"></div>
                        <p class="title__light__bold">Значение</p>
                    </div>
                    <div class="horizontal gap-6">
                        <p class="title__light">Характеристика</p>
                        <div class="dashed__gray"></div>
                        <p class="title__light__bold">Значение</p>
                    </div>
                    <div class="horizontal gap-6">
                        <p class="title__light">Характеристика</p>
                        <div class="dashed__gray"></div>
                        <p class="title__light__bold">Значение</p>
                    </div>
                </div>

                <div class="paragraph__details__row">
                    <div class="horizontal gap-6">
                        <p class="title__light">Характеристика</p>
                        <div class="dashed__gray"></div>
                        <p class="title__light__bold">Значение</p>
                    </div>
                    <div class="horizontal gap-6">
                        <p class="title__light">Характеристика</p>
                        <div class="dashed__gray"></div>
                        <p class="title__light__bold">Значение</p>
                    </div>
                    <div class="horizontal gap-6">
                        <p class="title__light">Характеристика</p>
                        <div class="dashed__gray"></div>
                        <p class="title__light__bold">Значение</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="paragraph__details-container">
            <div class="paragraph__details__content">
                <div class="paragraph__details__row">
                    <div>
                        <p class="title__extra-medium__bold">
                            Корпус 1
                        </p>
                        <p class="title__light title__gray">
                            Красногвардейская 32А, Литер Б
                        </p>
                    </div>

                    <div class="horizontal gap-6">
                        <p class="title__light">Характеристика</p>
                        <div class="dashed__gray"></div>
                        <p class="title__light__bold">Значение</p>
                    </div>
                    <div class="horizontal gap-6">
                        <p class="title__light">Характеристика</p>
                        <div class="dashed__gray"></div>
                        <p class="title__light__bold">Значение</p>
                    </div>
                    <div class="horizontal gap-6">
                        <p class="title__light">Характеристика</p>
                        <div class="dashed__gray"></div>
                        <p class="title__light__bold">Значение</p>
                    </div>
                </div>

                <div class="paragraph__details__row">
                    <div>
                        <p class="title__extra-medium__bold">
                            Корпус 2
                        </p>
                        <p class="title__light title__gray">
                            Красногвардейская 32А, Литер Б
                        </p>
                    </div>

                    <div class="horizontal gap-6">
                        <p class="title__light">Характеристика</p>
                        <div class="dashed__gray"></div>
                        <p class="title__light__bold">Значение</p>
                    </div>
                    <div class="horizontal gap-6">
                        <p class="title__light__bold">Характеристика</p>
                        <div class="dashed__gray"></div>
                        <p class="title__light__bold">Значение</p>
                    </div>
                    <div class="horizontal gap-6">
                        <p class="title__light">Характеристика</p>
                        <div class="dashed__gray"></div>
                        <p class="title__light__bold">Значение</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="paragraph__details-container">
            <div class="paragraph__details__content">
                <div class="paragraph__details__row">
                    <div>
                        <p class="title__extra-medium__bold">
                            Корпус 3
                        </p>
                        <p class="title__light title__gray">
                            Красногвардейская 32А, Литер Б
                        </p>
                    </div>

                    <div class="horizontal gap-6">
                        <p class="title__light">Характеристика</p>
                        <div class="dashed__gray"></div>
                        <p class="title__light">Значение</p>
                    </div>
                    <div class="horizontal gap-6">
                        <p class="title__light">Характеристика</p>
                        <div class="dashed__gray"></div>
                        <p class="title__light">Значение</p>
                    </div>
                    <div class="horizontal gap-6">
                        <p class="title__light">Характеристика</p>
                        <div class="dashed__gray"></div>
                        <p class="title__light">Значение</p>
                    </div>
                </div>
            </div>
        </div>
    `;
});
