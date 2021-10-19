export const fetchRepositories = async url => { // функция, которая принимает url'ы репозиториев пользователя, которого ищем
    const response = await fetch(url); // запрашиваем url'ы у сервера и получаем header promise
    if (response.ok) { // в случае статуса ok в promise header
        return /* await */ response.json(); // вытягиваем и возвращаем данные из сервера
    }
    throw new Error('Failed to load data'); // иначе пробрасываем ошибку наружу с текстом, что произошла ошибка загрузки
};

export const fetchUserData = async userId => { // функция, которая принимает в аргументы, данные пользователя (его user-id)
    const response = await fetch(`https://api.github.com/users/${userId}`); // отправляет запрос на сервер и получает header promise
    if (response.ok) { // проверяет или статус равен ok
        return /* await */ response.json(); // если да, то вытягивает и возвращает данные из сервера
    }
    throw new Error('Failed to load data'); // иначе пробрасывает ошибку наружу с текстом, что произошла ошибка загрузки
};