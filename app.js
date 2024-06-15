'use strict';

//Эта строка ищет элемент на веб-странице с классом "btn" и сохраняет его в переменной switcher
const switcher = document.querySelector('.btn');

// обработчик событий click на элементе switcher
switcher.addEventListener('click', function() {
    /*Эти строки переключают классы 'light-theme' и 'dark-theme' для элемента <body> документа. 
    Если у элемента уже есть класс 'light-theme', то он будет удален, а если нет, то добавлен*/
    document.body.classList.toggle('light-theme'); // togle — удаление или изменение
    document.body.classList.toggle('dark-theme');

    var imgArrowTop = document.getElementById("top-arrow");
    var imgBulb = document.getElementById('bulb');

    const className = document.body.className; // Эта строка сохраняет текущие классы элемента <body> в переменной className
    if(className == "light-theme") {
        this.textContent = "Dark"; // Если тема светлая, то на кнопке будет написано Dark
        imgArrowTop.src = "Images/top-arrow-white-theme.png" // стрелка будет чёрной
        imgBulb.src = "Images/off-light-theme.png"
    } else {
        this.textContent = "Light"; // Тут наоборот
        imgArrowTop.src = "Images/top-arrow-dark-theme.png"
        imgBulb.src = "Images/off-dark-theme.png"
    }

    console.log('current class name: ' + className);
});

// Переключение лампочки
function light(sw) {
    var image;
    const className = document.body.className;
    // выкл
    if (sw == 0 && className == "light-theme") {
        image = "Images/off-light-theme.png"
    }
    if (sw == 0 && className == "dark-theme") {
        image = "Images/off-dark-theme.png"
    }
    //вкл
    if (sw == 1 && className == "light-theme") {
        image = "Images/on-light-theme.png"
    } 
    if (sw == 1 && className == "dark-theme") {
        image = "Images/on-dark-theme.png"
    }
    document.getElementById('bulb').src = image;
}