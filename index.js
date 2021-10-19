import { showSpinner, hideSpinner } from './spinner.js';
import { renderUser } from './user.js';
import { renderRepositories, clearList } from './repository.js';
import { fetchRepositories, fetchUserData } from './gateways.js';

const showUserBtnElem = document.querySelector('.name-form__btn'); // берем кнопку для поиска
const userNameInputElem = document.querySelector('.name-form__input'); // берем кнопку для инпута

const userPlaceholder = { // создаем объект данных по дефолту (пользователь по умолчанию)
    avatar_url: 'https://qph.fs.quoracdn.net/main-qimg-827f81b25ac80e3d5ce42cf9020c03a2', // устанавливаем аватар
    name: '', // оставляем пустыми имя пользователя и его локацию
    location: ''
};

const onSearchUser = async() => { // создаем асинхронную функцию, которая при срабатывании поиска юзера
    clearList(); // очищает текущий репозиторий пользователья (если он есть)
    renderUser(userPlaceholder); // рендерит html для объекта-плейсхолдера, пока для поиска нового пользователя нет данных
    showSpinner(); // показывает элемент прокрутки (подгрузки), пока подгружается информация о новом пользователе
    const userId = userNameInputElem.value; // берем id пользователя, которого нужно найти из input
    try { // пытаемся
        const userData = await fetchUserData(userId); // получить данные пользователя (объект пользователя в случае успеха, или ошибку
        // в случае неуспеха)
        renderUser(userData); // рендерим html с данными нового пользователя
        const repositoriesData = await fetchRepositories(userData.repos_url); // в константу данных репозиториев добавляем данные
        // репозиториев пользователя из сервера, которые вернет функция или, в случае неуспеха, ошибку
        renderRepositories(repositoriesData); // на основе полученных данных рендерим html репозиториев нового пользователя
    } catch (error) { // в случае возврата ошибки из одного или обоих запросов, 
        alert(error.message) // показываем алерт
    } finally { // в любом случае 
        hideSpinner(); // прячем прокрутку загрузки
    }
};

renderUser(userPlaceholder); // устанавливаем пользователя по умолчанию в начале работы приложения
showUserBtnElem.addEventListener('click', onSearchUser); // слушаем клик по поиску данных нового пользоватея