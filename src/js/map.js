ymaps.ready(init);

var myMap,
    bigMap = false;

function init () {
    myMap = new ymaps.Map('contacts__map', {
        center: [53.888329, 27.544296],
        zoom: 14,
        controls: ['zoomControl', 'fullscreenControl']
    }, {
        // При сложных перестроениях можно выставить автоматическое
        // обновление карты при изменении размеров контейнера.
        // При простых изменениях размера контейнера рекомендуется обновлять карту программно.
        autoFitToViewport: 'always',
        searchControlProvider: 'yandex#search'
    });

    myMap.geoObjects
        .add(new ymaps.Placemark([53.888329, 27.544296], {
            balloonContent: 'Philadelphia in Belarus'
        }, {
            preset: 'islands#icon',
            iconColor: '#9e1a36'
        }))
}
