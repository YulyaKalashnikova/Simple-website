'use strict';

//Эта строка ищет элемент на веб-странице с классом "btn" и сохраняет его в переменной switcher
const switcher = document.querySelector('.btn');

// обработчик событий click на элементе switcher
switcher.addEventListener('click', function() {
    /*Эти строки переключают классы 'light-theme' и 'dark-theme' для элемента <body> документа. 
    Если у элемента уже есть класс 'light-theme', то он будет удален, а если нет, то добавлен*/
    document.body.classList.toggle('light-theme'); // togle — удаление или изменение
    document.body.classList.toggle('dark-theme');

    var img = document.getElementById("theme-image");

    const className = document.body.className; // Эта строка сохраняет текущие классы элемента <body> в переменной className
    if(className == "light-theme") {
        this.textContent = "Dark"; // Если тема светлая, то на кнопке будет написано Dark
        img.src = "Images/top-arrow-black.png" // стрелка будет чёрной
    } else {
        this.textContent = "Light"; // Тут наоборот
        img.src = "Images/top-arrow-white.png"
    }

    console.log('current class name: ' + className);
});

