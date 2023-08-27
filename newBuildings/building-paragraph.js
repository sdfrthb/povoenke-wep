const BUILDING_PARAGRAPH_BUTTON = '.paragraph__show-all';
const BUILDING_PARAGRAPH = '.building-description__paragraph__content';
const HEIGHT_OF_PARAGRAPH = '70px';

const paragraphsContainer = document.querySelectorAll('.building-description__paragraph');

paragraphsContainer && paragraphsContainer.forEach((paragraph) => {
    let showAllParagraph = true;

    const button = paragraph.querySelector(BUILDING_PARAGRAPH_BUTTON);
    const contentContainer = paragraph.querySelector(BUILDING_PARAGRAPH);
    const content = contentContainer.querySelector('p');
    const bottom = contentContainer.querySelector('.building-description__paragraph__content__bottom');

    button.addEventListener('click', () => {
        if (showAllParagraph) {
            contentContainer.style.maxHeight = `${content.clientHeight }px`;
            showAllParagraph = false;
            bottom.style.display = 'none';
            button.innerHTML = `
                <p class="title__light title__green">
                    Скрыть
                </p>`;
        } else {
            contentContainer.style.maxHeight = HEIGHT_OF_PARAGRAPH;
            showAllParagraph = true;
            bottom.style.display = 'block';
            button.innerHTML = `
                <p class="title__light title__green">
                    Показать полностью
                </p>`;
        }
    });
});