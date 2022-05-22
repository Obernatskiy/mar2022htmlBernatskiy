// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :

// -- отримує текст з параграфа з id "content"
//
// let elementById = document.getElementById('content');
// const text = elementById.innerText;
// console.log(text);

// -- отримує текст з блоку з id "rules"
// let byId = document.getElementById("rules");
// const text = byId.innerText;
// console.log(text);
// console.log(document.getElementById("rules").innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
//
// let elementById = document.getElementById('content');
// elementById.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, minima?";
// console.log(elementById.innerText);

// -- замініть текст параграфа з id 'rules' на будь-який інший
//
// let elementById = document.getElementById('rules');
// elementById.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
// console.log(elementById.innerText);

// -- змініть кожному елементу колір фону на червоний
//
// let children = document.body.children;
// for (const child of children) {
//     child.style.background = 'red';
// }

// -- змініть кожному елементу колір тексту на синій
//
// let nodeListOf = document.querySelectorAll('*');
// for (const nodeListOfElement of nodeListOf) {
//     nodeListOfElement.style.color = 'blue';
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// let elementById = document.getElementById('rules');
// console.log(elementById.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
//
// let elementsByClassName = document.getElementsByClassName('fc_rules');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.style.color = 'red';
// }


// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// a) додає клас з назвою групи, елементу з ід main_header
// let elementById = document.getElementById('main_header');
// elementById.className = 'marjsfull';
// elementById.classList.add('hello');

// b) робить шириниу елементу ul 400px
//
// let byTagNameNS = document.getElementsByTagName('ul');
// for (const byTagNameN of byTagNameNS) {
//     byTagNameN.style.width = '400px'
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%
//
// let elementsByClassName = document.getElementsByClassName('linkList');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.style.width = '50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2
//
// let elementsByClassName = document.getElementsByClassName('listElement2');
// for (const elementsByClassNameElement of elementsByClassName) {
//     console.log(elementsByClassNameElement.innerText);
// }
//
// let text = elementsByClassName.innerText;
// let hello ='hello';
// console.log( hello + text);

// e) отримує всі елементи li та змінює ім колір фону на сірий
//
// let elementsByTagName = document.getElementsByTagName('li');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.background = 'silver';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
//
// let elementsByTagName = document.getElementsByTagName('a');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.classList.add('anchor');
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, +
// змінює йому розмір тексту на 40 пікселів
//
// let elementsByTagName = document.getElementsByTagName('a');
// for (const elementsByTagNameElement of elementsByTagName) {
//     if (elementsByTagNameElement.innerText === 'link3') {
//         elementsByTagNameElement.style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
//  let elementsByTagName = document.getElementsByTagName('a');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.classList.add(`elem_${elementsByTagNameElement.innerText}`)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// let bg = prompt('enter color');
// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.style.background = bg;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
//
// let bg = prompt('enter color');
// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const elementsByClassNameElement of elementsByClassName) {
//     if (elementsByClassNameElement.innerText === 'content 2 segment') {
//         elementsByClassNameElement.style.color = bg;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
// let text = prompt('enter text');
// let elementsByClassName = document.getElementsByClassName('content_1');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.innerText = text;
// }

// l) отримати елементи p та змінити їм padding на 20px
//
// let elementsByTagName = document.getElementsByTagName('p');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
//
// let elementsByClassName = document.getElementsByClassName('text2');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.innerText = 'mar-2022'
// }
