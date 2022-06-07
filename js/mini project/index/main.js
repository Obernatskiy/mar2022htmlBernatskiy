// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        const divWrap = document.createElement('div');
        divWrap.setAttribute('class', 'wrap')
        document.body.append(divWrap);

        for (const item of value) {
            const innerDiv = document.createElement('div');
            innerDiv.setAttribute('class', 'inner')

            innerDiv.innerHTML = `<h2>  ${item.id} - ${item.name}</h2>`
            divWrap.append(innerDiv);

            const button = document.createElement('button');
            innerDiv.appendChild(button);

            button.innerHTML = `<a href="../user-details/user-details.html" style="text-decoration: none">Click</a>`

            button.onclick = () => {
                localStorage.setItem('user', JSON.stringify(item));
            }
        }

    })
