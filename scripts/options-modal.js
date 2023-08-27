const OPTIONS_LIST = [
    {
        selector: '.delivery-deadline',
        options: [
            {
                corpus: 'Корпус 1',
                home: 'Дом 1',
                countOfFlats: '1кв 2022'
            },
            {
                corpus: 'Корпус 1',
                home: 'Дом 1',
                countOfFlats: '1кв 2022'
            },
            {
                corpus: 'Корпус 1',
                home: 'Дом 1',
                countOfFlats: '1кв 2022'
            },
            {
                corpus: 'Корпус 1',
                home: 'Дом 1',
                countOfFlats: '1кв 2022'
            },
            {
                corpus: 'Корпус 1',
                home: 'Дом 1',
                countOfFlats: '1кв 2022'
            },
        ],
    },
    {
        selector: '.number-of-floors',
        options: [
            {
                corpus: 'Корпус 1',
                home: 'Дом 1',
                countOfFlats: '1кв 2022'
            },
            {
                corpus: 'Корпус 1',
                home: 'Дом 1',
                countOfFlats: '1кв 2022'
            },
            {
                corpus: 'Корпус 1',
                home: 'Дом 1',
                countOfFlats: '1кв 2022'
            },
        ],
    },
];

function parentsNodesContainClass(node, className) {
    if (node?.parentNode?.classList?.contains(className))
        return true;

    if (node?.className !== className && node?.className != null) {
        return parentsNodesContainClass(node.parentNode, className);
    } else if (node?.className !== null) {
        return false;
    }
}

function handleCloseAllMenus(event) {
    OPTIONS_LIST.map(({selector}) => {
        const optionsTabElement = document.querySelector(selector);

        if (optionsTabElement && !parentsNodesContainClass(event.target, selector)) {
            const menu = optionsTabElement.querySelector('.options-modal');
            menu && optionsTabElement.removeChild(menu);
        }
    });
}

window.addEventListener('resize', () => {
    setTimeout(() => {
        try {
            handleSwitchShowAllFilters()
        } catch (e) {}
    }, 0);
});

// При нажатии на таб бар открывается выпадающее меню

function handleOpenMenuFilter(event, selector, menu) {
    const optionsTabElement = document.querySelector(selector);

    const isVisible = optionsTabElement.querySelector('.options-modal');

    if (!isVisible) {
        handleCloseAllMenus(event);
        optionsTabElement.appendChild(menu);

        handleSetCloseOptionMenuBtn();
    }
}

// При нажатии на крестик закрываются модалки

function handleSetCloseOptionMenuBtn() {
    document.querySelectorAll('.options-modal__close__btn')
        .forEach((element) => {
            element
                .addEventListener('click', () => {
                    OPTIONS_LIST.map(({selector}) => {
                        const optionsTabElement = document.querySelector(selector);

                        if (optionsTabElement) {
                            try {
                                console.log(optionsTabElement)
                                const menu = optionsTabElement.querySelector('.options-modal');
                                setTimeout(() => menu && optionsTabElement.removeChild(menu), 0)
                            } catch (e) {}
                        }
                    });
                })
        })
}

function handleSetMenusForAllFiltersTabs() {
    OPTIONS_LIST.map(({selector, options}) => {
        const optionsTabElement = document.querySelector(selector);

        const menu = document.createElement('div');
        menu.className = 'options-modal';

        menu.innerHTML = `
            <div class="options-modal__header">
                <p class="title__light title__gray">
                    Сроки сдачи
                </p>
                <svg class="options-modal__close__btn" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.3634 5.72865C15.0384 5.40365 14.5134 5.40365 14.1884 5.72865L10.1134 9.79531L6.03838 5.72031C5.71338 5.39531 5.18838 5.39531 4.86338 5.72031C4.53838 6.04531 4.53838 6.57031 4.86338 6.89531L8.93838 10.9703L4.86338 15.0453C4.53838 15.3703 4.53838 15.8953 4.86338 16.2203C5.18838 16.5453 5.71338 16.5453 6.03838 16.2203L10.1134 12.1453L14.1884 16.2203C14.5134 16.5453 15.0384 16.5453 15.3634 16.2203C15.6884 15.8953 15.6884 15.3703 15.3634 15.0453L11.2884 10.9703L15.3634 6.89531C15.68 6.57865 15.68 6.04531 15.3634 5.72865Z" fill="#173B5E" fill-opacity="0.35"/>
                </svg>
            </div>
        `;

        const menuContent = document.createElement('div');
        menuContent.className = 'options-modal__container';

        options.map(({corpus, home, countOfFlats}) => {
            const optionElement = document.createElement('a');
            optionElement.href = '#'
            optionElement.className = 'options-modal__option title__link';
            optionElement.innerHTML = `
                <div class="">
                    <p class="title__light">
                        ${corpus}
                    </p>
                    <p class="title__light">
                        ${home}
                    </p>
                </div>
                <p class="title__light">
                    ${countOfFlats}
                </p>
                
            `;

            menuContent.appendChild(optionElement);
        });

        menu.appendChild(menuContent);

        optionsTabElement && optionsTabElement.addEventListener('click', (event) =>
            handleOpenMenuFilter(event, selector, menu)
        );
    });
}

// window.addEventListener('click', (event) => {
//     if (!parentsNodesContainClass(event.target, 'building-info__more-info__row')) {
//         handleCloseAllMenus(event);
//     }
// });

handleSetMenusForAllFiltersTabs();
