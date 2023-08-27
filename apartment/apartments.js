const apartmentObjectTypeContainer = document.querySelector('.apartment-object-type-container');
const apartmentObjectTypeFilters = apartmentObjectTypeContainer.querySelectorAll('.apartment-object-type__item');

apartmentObjectTypeFilters && apartmentObjectTypeFilters.forEach((item) => {
    item.addEventListener('click', () => {
        apartmentObjectTypeFilters.forEach((buttonItem) => {
            buttonItem.classList.remove('apartment-object-type__item__active');
        });

        item.classList.add('apartment-object-type__item__active');
    });
});