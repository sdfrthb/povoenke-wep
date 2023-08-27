const BUILDING_OBJECT_TYPE_ACTIVE_CLASS = 'building-object-type__item__active';
const BUILDING_OBJECT_TYPE_CONTAINER_CLASS = '.building-object-type-container';
const BUILDING_OBJECT_TYPE_ITEM_CLASS = '.building-object-type__item';
const BUILDING_APARTMENTS_FLAT_LIST_CLASS= '.building-apartments__flat-list';
const BUILDING_APARTMENTS_FLAT_LIST_ITEM_CLASS= '.building-apartments__flat-list__item';
const BUILDING_APARTMENTS_FLAT_LIST_ITEM_ACTIVE_CLASS= 'building-apartments__flat-list__item__active';

const buildingObjectTypeContainer = document.querySelector(BUILDING_OBJECT_TYPE_CONTAINER_CLASS);
const buildingObjectTypeFilters = buildingObjectTypeContainer && buildingObjectTypeContainer.querySelectorAll(BUILDING_OBJECT_TYPE_ITEM_CLASS);
const buildingApartmentsFlatListContainer = document.querySelector(BUILDING_APARTMENTS_FLAT_LIST_CLASS);
const buildingApartmentsFlatListItems = buildingApartmentsFlatListContainer && buildingApartmentsFlatListContainer.querySelectorAll(BUILDING_APARTMENTS_FLAT_LIST_ITEM_CLASS);

buildingObjectTypeFilters && buildingObjectTypeFilters.forEach((item) => {
    item.addEventListener('click', () => {
        buildingObjectTypeFilters.forEach((buttonItem) => {
            buttonItem.classList.remove(BUILDING_OBJECT_TYPE_ACTIVE_CLASS);
        });

        item.classList.add(BUILDING_OBJECT_TYPE_ACTIVE_CLASS);
    });
});

buildingApartmentsFlatListItems && buildingApartmentsFlatListItems.forEach((apartment) => {
    apartment.addEventListener('click', () => {
        buildingApartmentsFlatListItems.forEach((item) => {
            item.classList.remove(BUILDING_APARTMENTS_FLAT_LIST_ITEM_ACTIVE_CLASS);
        });

        apartment.classList.add(BUILDING_APARTMENTS_FLAT_LIST_ITEM_ACTIVE_CLASS);
    });
})
