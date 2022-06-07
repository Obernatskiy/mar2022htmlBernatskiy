// - Создать произвольный елемент с id = text.
//     Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// const div = document.createElement('div');
// div.setAttribute('id', 'text');
// div.innerText = 'hello';
//
// const buttonElement = document.createElement('button');
// buttonElement.innerText = 'click';
//
// document.body.append(div,buttonElement);
//
// buttonElement.onclick = function () {
//     div.style.display = 'none';
// }
// buttonElement.onclick = function () {
//     div.style.visibility = 'hidden';}
//
// buttonElement.onclick = function () {
//     div.remove();
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// const inputElement = document.createElement('input');
// inputElement.type = 'number';
//
// const buttonElement = document.createElement('button');
// buttonElement.innerText = 'click'
//
// document.body.append(inputElement,buttonElement);
//
// buttonElement.addEventListener('click', function () {
//     if (inputElement.value >= 18) {
//         alert('hello');
//     }
//     else {
//         alert('not HeLLo')
//     }
//     inputElement.value = '';
// })

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та
// виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// const button = document.getElementById('but');
// button.addEventListener('click', function (){
//     console.log(document.forms.f1.inputOne.value);
//     console.log(document.forms.f1.inputTwo.value);
//     console.log(document.forms.f2.inputThree.value);
//     console.log(document.forms.f2.inputFour.value);
// })

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

const inputOne = document.createElement('input');
const inputTwo = document.createElement('input');
const inputThree = document.createElement('input');

const button = document.createElement('button');
button.innerText = 'click';
document.body.append(inputOne, inputTwo, inputThree, button);

button.addEventListener('click', function () {
    const tr = inputOne.value;
    const td = inputTwo.value;
    const inputText = inputThree.value;

    function creatorTable(tr, td, text) {
        const table = document.createElement('table');
        document.body.append(table);
        for (let i = 0; i < tr; i++) {
            const tr = document.createElement('tr');
            table.appendChild(tr);

            for (let j = 0; j < td; j++) {
                const td = document.createElement('td');
                td.innerText = `${text}`
                td.style.border = '1px solid red'
                tr.appendChild(td);
            }
        }
    }
    creatorTable(tr,td,inputText);
})















