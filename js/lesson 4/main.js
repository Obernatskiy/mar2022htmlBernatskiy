// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle (a,b) {
//     return a*b;
// }
// console.log(rectangle(10, 7));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle(r) {
//     return 3.14 * r * r;
// }
// console.log(circle(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function circle(r, h) {
//     return 3.14 * r * h * 2;
// }
// console.log(circle(3, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1,2,3];
// function data (array) {
//     for (const item of array) {
//         console.log(item);
//     }
// }
// data(arr);
// data([1,2,3]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function par(text) {
//     document.write(`<p>${text}</p>`)
// }
// par('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function name(text) {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// name('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function liElem(text, num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// liElem('hello', 4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let array = [1, 2, 'hello okten', true];
//
// function data(arr) {
//     document.write(`<ul>`)
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// data(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let arr = [
//     {
//         id : 1,
//         name : 'sasha',
//         age : 22
//     },
//     {
//         id : 2,
//         name : 'khristia',
//         age : 20
//     }
// ];
// function obj (array) {
//     for (const item of array) {
//         document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)
//     }
// }
// obj(arr);

// // - створити функцію яка повертає найменьше число з масиву
// let arr = [1, 2, 4, 6, 8, -10, -20];
//
// function minNum(array) {
//     let min = array[0];
//     for (const item of array) {
//         if (item < min) {
//             min = item;
//         }
//     }
//     return min;
// }
//
// console.log(minNum(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1, 2, 3, 4];
//
// function foo(arr) {
//     let sum = 0;
//     for (const item of arr) {
//         sum = sum + item;
//     }
//     return sum;
// }
//
// console.log(foo(arr));