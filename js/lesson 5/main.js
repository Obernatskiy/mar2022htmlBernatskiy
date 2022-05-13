// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let arr = [1, 2, 3, 4];
// let aver = (arr) => {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum / arr.length;
// }
// console.log(aver(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let minMax = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//     for (const argElement of arg) {
//         if (argElement < min) {
//             min = argElement
//         }
//         if (argElement > max) {
//             max = argElement
//         }
//     }
//     console.log(max);
//     return (min);
// }
// console.log(minMax(1, 2, 8, 6, 4, 8, 7, 10));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let random = () => {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         // arr.push(Math.round(Math.random() * 100));
//         arr [i] = Math.round(Math.random() * 100);
//     }
//     return (arr);
// }
// console.log(random());

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let random = (limit) => {
//     let arr = [];
//     for (let i = 0; i < limit; i++) {
//         // arr.push(Math.round(Math.random() * 100));
//         arr [i] = Math.round(Math.random() * 100);
//     }
//     return (arr);
// }
// console.log(random(7));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let arr = [1, 2, 3, 4];
// let rev = (array) => {
//     let newArr = [];
//     // for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
//     //     newArr[j] = arr[i];
//     // }
//     for (let i = array.length - 1; i >= 0; i--) {
//         newArr.push(array[i]);
//     }
//     return (newArr);
// }
// console.log(rev(arr));

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
//
// let array = [
//     {
//         age: 22
//     },
//     {
//         age: 33
//     },
//     {
//         age: 44
//     }
// ]
// // let change =  (array) => {
// //     let temp = array[0];
// //     array[0] = array[1];
// //     array[1] = temp;
// //     return (array);
// // }
// // console.log(change(arr));
// let change = (array) => [array[0], array[1], array[2]] = [array[2], array[1], array[0]];
// console.log(change(array));

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// let rectangle = (a,b) => a*b;
// console.log(rectangle(10, 2));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// let circle = (r) => 3.14 * Math.pow(r, 2);
// console.log(circle(5));

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// let cilinder = (h, r) => 3.14 * h * r * 2;
// console.log(cilinder(5, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let arr = [1, 2, 3, 4];
// let foo = (arr) => {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// foo(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let foo = (text) => {
//     document.write(`<p>${text}</p>`)
// }
// foo ('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let text = (text) => document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
// text('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let text = (text, num) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// text("hello", 4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let arr = [1, 'hello', true];
// let foo = (arr) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// foo (arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let arr = [
//     {
//         id: 1,
//         name: 'sasha',
//         age: 22
//
//     },
//     {
//         id: 2,
//         name: 'Kristina',
//         age: 20
//
//     }
// ];
// let text = (arr) => {
//     for (const item of arr) {
//         document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)
//     }
// }
// text(arr);

// - створити функцію яка повертає найменьше число з масиву
//
// let arr = [1, 2, 4, 8, 5, 6, 7, -10];
// let min = (arr) => {
//     let min = arr[0];
//     for (const minElement of arr) {
//         if (minElement < min) {
//             min = minElement
//         }
//     }
//     return (min);
// }
// console.log(min(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let arr = [1,2,10];
// let sum = (arr) => {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement
//     }
//     return (sum);
// }
// console.log(sum(arr));

