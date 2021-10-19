const spinnerElem = document.querySelector('.spinner'); // берем элемент прокрутки (подгрузки) пока осущестляется поиск пользоателя

export const showSpinner = () => { // функция, которая показывает элемент прокрутки (подгрузки), пока подгружается информация, путем 
    spinnerElem.classList.remove('spinner_hidden'); // удаления класса spinner_hidden (спрятанная прокрутка) у элемента прокрутки
};

export const hideSpinner = () => { // функция, которая прячет элемент прокрутки (подгрузки) добавляея ему класс spinner_hidden
    spinnerElem.classList.add('spinner_hidden'); // (спрятанная прокрутка)
};