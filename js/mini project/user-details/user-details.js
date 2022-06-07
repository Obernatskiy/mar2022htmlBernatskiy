// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост


let userObj = JSON.parse(localStorage.getItem('user'));
const divElement = document.createElement('div');
divElement.setAttribute('class', 'user')
document.body.append(divElement);


for (const item in userObj) {
    if (typeof userObj[item] !== 'object') {
        const innerDiv = document.createElement('div');
        innerDiv.innerHTML = `${item} : ${userObj[item]}`
        divElement.append(innerDiv)
    }

    if (typeof userObj[item] === 'object') {
        for (const itemKey in userObj[item]) {
            if (typeof userObj[item][itemKey] !== 'object') {

                const divKey = document.createElement('div');
                divKey.innerHTML = `${itemKey} : ${userObj[item][itemKey]}`;
                divElement.append(divKey);
            }

            if (typeof userObj[item][itemKey] === 'object') {
                for (const obj in userObj[item][itemKey]) {

                    if (typeof userObj[item][itemKey][obj] !== 'object') {

                        const htmlDivElement = document.createElement('div');
                        htmlDivElement.innerHTML = `${obj} : ${userObj[item][itemKey][obj]}`;
                        divElement.append(htmlDivElement);
                    }
                }
            }
        }
    }


}

const buttonElement = document.createElement('button');
buttonElement.innerText = 'post of current user'
buttonElement.setAttribute('class', 'btn')
divElement.append(buttonElement)
buttonElement.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userObj.id}/posts`)
        .then(value => value.json())
        .then(value => {
            const titleDiv = document.createElement('div');
            titleDiv.setAttribute('class', 'title')
            divElement.append(titleDiv);
            for (const item of value) {
                const element = document.createElement('div');
                element.setAttribute('class', 'item')

                // element.innerHTML = `<h2>title : ${item.title} </h2>`
                element.innerHTML = `title : ${item.title}`
                titleDiv.append(element);

                const htmlButtonElement = document.createElement('button');



                htmlButtonElement.innerHTML = `<a href="../post-details/post-details.html" style="text-decoration: none">post-details</a>`

                htmlButtonElement.onclick = () => {
                    localStorage.setItem('title name', JSON.stringify(item));
                }

                buttonElement.disabled = true;
                element.append(htmlButtonElement);

            }
        })
}