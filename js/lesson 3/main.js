// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>hellookten</div>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//         document.write(`<div>hello okten ${i}</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>hello okten</h1>`)
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>hello okten ${i} </h1>`)
//     i++
// }

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write('<ul>');
// for (let item of listOfItems) {
// document.write(`<li>${item}</li>`);
// }
// document.write('</ul>');

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (let product of products) {
//     document.write(`<div class="product-card">
//         <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
//         <img src="${product.image}" alt="" class="product-image">
// </div>`)
// }

// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// for (let user of users) {
//     if (user.status)
//     {
//         console.log(user)}
// }
// for (let user of users) {
//     if (!user.status)
//     {
//         console.log(user)}
// }
// for (let user of users) {
//     if (user.age > 30){
//         console.log(user)
//     }
// }

//  additional

// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// let arr = [1,2,3,4,5];
// console.log(arr);
//
// let a = ['asd', 'aqw', 'dsc', 'hello', 'okten'];
// console.log(a);
//
// let b = ['asc', 'dca', 1, 2, true, false];
// console.log(b);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// for (let i = 0; i < 10; i++) {
//     array [i] = i + 1;
// }
// console.log(array);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// let i = 0
// while (i < array.length) {
//     console.log(array [i]);
//     i++
// };

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// let i = 0
// while (i < array.length) {
//     if (
//         i % 2 !== 0
//     ) {
//         console.log(array [i]);
//     }
//
//     i++
// }

// let i = 0
// while (i < array.length) {
//     if (
//         i % 2 === 0
//     ) {
//         console.log(array [i]);
//     }
//
//     i++
// }


// for (let i = 0; i < array.length; i++) if (
//     i % 2 !== 0
// ) {
//     console.log(array[i]);
// }
//
// for (let i = 0; i < array.length; i++) if (
//     i % 2 === 0
// ) {
//     console.log(array[i]);
// }


// for (let i = 0; i < array.length; i++) {
//     if ( i % 3 === 0) {
//         array[i] = 'hello';
//     }
// }
// console.log(array);

// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }

//
// let i = array.length;
// while (i >= 0) {
//     console.log(array[i]);
//     i--
// }
//
// for (let i = array.length; i >= 0; i--) {
//     console.log(array[i]);
// }
