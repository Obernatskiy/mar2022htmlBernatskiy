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


// additional

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function foo(a, b, c) {
//     if (a < b && a < c) {
//         return a;
//     }
//     else if (
//         b<a && b<c
//     ) {
//         return b
//     }
//     else if (c<b && c<a) {
//         return c
//     };
// }
//
// console.log(foo(30, 15, 20));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// function foo(a, b, c) {
//     if (a > b && a > c) {
//         return a;
//     } else if (
//         b > a && b > c
//     ) {
//         return b
//     } else if (c > b && c > a) {
//         return c
//     }
// }
//
// console.log(foo(30, 15, 20));

// - створити функцію яка повертає найбільше число з масиву
//
// let arr = [1, 2, 4, 6, 8, -10, -20, 30];
//
// function maxNum(array) {
//     let max = array[0];
//     for (const item of array) {
//         if (item > max) {
//             max = item;
//         }
//     }
//     return max;
// }
//
// console.log(maxNum(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let arr = [1, 2, 4, 6, 8];
//
// function foo(arr) {
//     let sum = 0
//     for (const item of arr) {
//         sum += item
//     }
//     return sum / arr.length;
// }
//
// console.log(foo(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
//     а виводить найбільше (Math використовувати заборонено);
//
// function minMax(...arg) {
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
//     return min;
// }
//
// minMax(1, 2, 4, 8, 4, 6, 3, 7, 21, 8, 2, 1, -1);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// function random() {
//     let arr = []
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//
//     }
//     return (arr);
//
// }
//
// console.log(random());


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
//     який характеризує кінцеве значення діапазону.
//
// function lim (limit) {
//     let arr = []
//     for (let i = 0; i < limit; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr
// }
// console.log(lim(5));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let arr = [1, 2, 3]
//
// function reverse(arr) {
//     let newArr = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i]);
//     }
//     return (newArr)
// }
//
// console.log(reverse(arr));

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
//     якщо два аргументи - складає або конкатенує їх між собою.
//
// function name() {
//     let result = 0;
//     if (
//         arguments.length === 1
//     ) {
//         return arguments;
//     }
//     else if ( arguments.length === 2) {
//         // for (const argument of arguments) {
//         //     result += argument;
//             result = arguments[0] + arguments[1];
//     }
//     return result;
// }
// console.log(name(1,2));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
//     [3,5,7,9]
//
// let array1 = [1, 2, 3, 4];
// let array2 = [2, 3, 4, 5];
//
// function arr(array1, array2) {
//     let newArr = []
//     for (let i = array1.length - 1; i >= 0; i--) {
//         newArr[i] = array1[i] + array2 [i]
//     }
//     const reverse = newArr.reverse();
//     return reverse
//     // for (let i = 0; i < array1.length; i++) {
//     //     newArr[i] = array1[i] + array2 [i]
//     // newArr.push(array1[i] + array2[i]);
// }
//
// console.log(arr(array1, array2));




