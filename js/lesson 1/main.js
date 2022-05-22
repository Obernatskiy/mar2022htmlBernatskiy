// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let a1 = 'hello';
// let a2 = 'owu';
// let a3 = 'com';
// let a4 = 'ua';
// let a5 = 1;
// let a6 = 10;
// let a7 = -999;
// let a8 = 123;
// let a9 = 3.14;
// let a10 = 2.7;
// let a11 = 16;
// let a12 = true;
// let a13 = false;

// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)
// console.log(a5)
// console.log(a6)
// console.log(a7)
// console.log(a8)
// console.log(a9)
// console.log(a10)
// console.log(a11)
// console.log(a12)
// console.log(a13)

// alert(a1)
// alert(a2)
// alert(a3)
// alert(a4)
// alert(a5)
// alert(a6)
// alert(a7)
// alert(a8)
// alert(a9)
// alert(a10)
// alert(a11)
// alert(a12)
// alert(a13)

// document.write(a1)
// document.write(a2)
// document.write(a3)
// document.write(a4)
// document.write(a5)
// document.write(a6)
// document.write(a7)
// document.write(a8)
// document.write(a9)
// document.write(a10)
// document.write(a11)
// document.write(a12)
// document.write(a13)

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// let book1 = {
//     title: 'pwer',
//     pages: '300',
//     ganre: 'fantasy'
// };
// console.log(book);

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)
// let book2 = {
//     title: 'pwer',
//     pages: 300,
//     ganre: 'fantasy',
//     autor: [
//         'wiwi',
//         'ototio',
//         'ioio'
//     ]
// };
// console.log(book2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
// let firstName = 'Olexandr';
// let middleName = 'Yuriyovich';
// let lastName = 'Bernatskiy';
// let person = firstName + ' ' + middleName + ' ' + lastName;
// let person = `${firstName} ${middleName} ${lastName}`;
// console.log(person);

// let fn = prompt('write your name');
// let mn = prompt('write your md name');
// let ln = prompt('write your ls name');
// let person = `${fn} ${mn} ${ln}`;
// console.log(person);

// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)

// let books = [
//     {title: 'title1', pages: 10, ganre: 'horror', authors: "authors1"},
//     {title: 'title2', pages: 20, ganre: 'love', authors: "authors2"},
//     {title: 'title3', pages: 30, ganre: 'horror', authors: "authors3"},
//     {title: 'title3', pages: 40, ganre: 'love', authors: "authors4"}
// ];
// console.log(books[0]);
// console.log(books[1]);
// console.log(books[2]);
// console.log(books[3]);

// additional.txt

// Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
//
// const height = 23;
// const width = 10;
// const s = height * width;
// console.log(s);

// // Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// // результат помістіть у змінну v.
//
// const heightC = 10;
// const dC = 4;
// const rC = 2;
// const v = 3.14 * heightC * rC * rC;
// console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь
// ) або оператор зведення в ступінь **).
//
// const n = 3;
// const m = 4;
// let n2 = Math.pow(3, 2)
// let m2 = Math.pow(4, 2);
// const k = (m2 + n2);
// console.log(k / 2);


// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true


// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 === 6);
// console.log(5 >= 6);
// console.log(10 === 10);
// console.log(10 >= 10);
// console.log(10 < 10);
// console.log(10 > 10);
// console.log(10 != 10);
// console.log(123 === '123');
// console.log(123 !== '123');
