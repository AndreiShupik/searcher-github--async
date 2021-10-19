const userNameElem = document.querySelector('.user__name'); // берем span имени пользователя
const userLocationElem = document.querySelector('.user__location'); // берем span локации пользователя
const userAvatarElem = document.querySelector('.user__avatar'); // берем img аватар пользователя

export const renderUser = userData => { // функция отрисовки html для каждого нового пользователя, принимающая объект данных пользователя
    const { avatar_url, name, location } = userData; // в одноименные переменные присваиваем данные из свойств объекта данных 
    // пользователя
    userAvatarElem.src = avatar_url; // добавляем свойству scr userAvatarElem значение переменной url-адреса аватара
    userNameElem.textContent = name; // давляем в span имени нового пользователя значение имени нового объекта
    userLocationElem.textContent = location ? `from ${location}` : ''; // добаляем в спан локации: если есть локация - from имя локации
}; // если локации нет, - оставляем пустой. Данные берем из локации нового объекта