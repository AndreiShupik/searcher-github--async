const reposList = document.querySelector('.repo-list'); // берем список ul репозиториев пользователя

export const clearList = () => { // функцию очистки списка репозиториев
    reposList.innerHTML = '';
};

export const renderRepositories = repositoriesList => { // функция отрисовки элементов li для каждого репозитория из списка
    const listElems = repositoriesList // присваиваем массив репозиториев, полученный из свойства объекта repos_url
        .map(({ name }) => { // маппим его
            const listItem = document.createElement('li'); // каждому элементу создаем элемент li
            listItem.classList.add('repo-list__item'); // и добавляем класс 
            listItem.textContent = name; // добавляем в содержимое каждого li имя текущего репозитория
            return listItem; // возвращаем элемент репозитория
        });
    clearList(); // очщаем текущий список репозитория (ели такой имеется)
    reposList.append(...listElems); // добавляем новый сгенерированный список репозиториев
};