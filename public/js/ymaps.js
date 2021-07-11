ymaps.ready(init);
let myMap,
    myPlacemark;

function init() {
    myMap = new ymaps.Map("contacts-map", {
        center: [54.7526, 56.0020],
        zoom: 17
    });

    myPlacemark = new ymaps.Placemark([54.7526, 56.0020], {
        hintContent: 'г. Уфа',
        balloonContent: 'Проспект Октября, 46. Добрый картон'
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('drag');
    myMap.behaviors.disable('DblClickZoom');
}