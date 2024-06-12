'use strict';

// switcher является ссылкой на кнопку на странике
// querySelector использует селекторы CSS
const switcher = document.querySelector('.btn')

// обработчик событий click
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className = "light-theme") {
        this.textContent = "Dark"
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});

