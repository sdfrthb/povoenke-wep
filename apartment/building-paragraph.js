const APARTMENT_PARAGRAPH_BUTTON = '.paragraph__show-all';
const APARTMENT_PARAGRAPH = '.apartment-description__paragraph__content';
const HEIGHT_OF_PARAGRAPH = '70px';

const paragraphsContainer = document.querySelectorAll('.apartment-description__paragraph');

paragraphsContainer && paragraphsContainer.forEach((paragraph) => {
    let showAllParagraph = true;

    const button = paragraph.querySelector(APARTMENT_PARAGRAPH_BUTTON);
    const contentContainer = paragraph.querySelector(APARTMENT_PARAGRAPH);
    const content = contentContainer.querySelector('p');
    const bottom = contentContainer.querySelector('.apartment-description__paragraph__content__bottom');

    button && button.addEventListener('click', () => {
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