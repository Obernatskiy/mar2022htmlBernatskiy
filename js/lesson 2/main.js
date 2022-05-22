// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt("give me X");
// if (x === 0) {
//     console.log('Virno');
// } else {
//     console.log('Ne Virno');
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('what time is it');
// if (time >=0 && time<=15) {
//     console.log('first quater');
// }
// else if (time > 15 && time <= 30) {
//     console.log('second quater');
// }
// else if (time > 30 && time <= 45) {
//     console.log('third quater');
// }
// else if (time > 45 && time <= 59) {
//     console.log('fourth quater');
// }
// else {
//     console.log('???')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 21;
// if (typeof day === "number") {
//     if (day >= 1 && day <= 11) {
//         console.log("decade1")
//     }
//  else if (day >= 11 && day <= 21) {
//         console.log("decade2")
//     }
//  else if (day >= 21 && day <= 31) {
//         console.log("decade3")
//     } else {
//         console.log("????")
//     }
// }
// else {
//     console.log('you enter string type')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// switch (+prompt('day number')) {
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log('wednesday');
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break
//     case 6:
//         console.log('saturday')
//         break;
//     case 7:
//         console.log('sunday')
//         break;
//     default:
//         console.log('????')
//
// }

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let a = 5;
// let b = 0;
//
// if (a > b) {
//     console.log('a');
// }else if (b>a) {
//         console.log('b');
// }
// else if (a === b) {
//     console.log('equal');
// }

// additional.txt

// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому
// 3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
//
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//
// if (friends.length >= 3) {
//     console.log('big array');
// } else if (friends.length < 3) {
//     console.log('little array');
// }

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше).
// Перевірити, чи знаходиться перше число між двома іншими.
//
// let arr = [3, 6, 7]
// if ((arr[1] > arr[0] && arr[1] < arr[2]) || (arr[1] < arr[0] && arr[1] > arr[2])) {
//     console.log(arr[1]);
//
// } else if ((arr[0] > arr[1] && arr[0] < arr[2]) || (arr[0] < arr[1] && arr[0] > arr[2])) {
//     console.log(arr[0]);
//
// } else if (
//     (arr[2] > arr[1] && arr[2] < arr[0]) || (arr[2] < arr[1] && arr[2] > arr[0])) {
//     console.log(arr[2]);
// }

//
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// const a = 5;
// const b = 1;
// const result = (a + b < 4) ? 'мало' : 'Багато';
// console.log(result);
// if (a + b < 4) {
//     result = 'Мало';
// } else if (a + b > 4){
//     result = 'Багато';
// }


// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
// let a = +prompt("number");
// let result = (a === 0) ? 'null' : (a > 0) ? 'positive' : 'negative';
// console.log(result);


// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта
//     - з коротким записом(тернаркою)
// let a = +prompt('number');
// const test = (a > 0) ? 'Вірно' : 'Неправильно';
// console.log(test);


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//
// let name = prompt('what official name JavaScript?');
// if (name === 'ECMAScript') {
//     console.log('Правильно');
// } else if (name !== 'ECMAScript') {
//     console.log('Не знаєте? ECMAScript!');
// }


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
// let number = +prompt('number home');
// if (number >= 1 && number <= 20) {
//     console.log('first');
// } else if (
//     number >= 21 && number <= 48
// ) {
//     console.log('second');
// } else if (number >= 49 && number <= 90) {
//     console.log('third');
// } else {
//     console.log('????');
// }


// - Ми маємо змінну number в яку користувач задає числове значення,
//     якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
// let a = +prompt('number');
// if (a === 10 ) {
//     console.log('virno');
// }
// else if (a!== 10) {
//     console.log('ne virno');
// }


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
// let temp = +prompt('air temperature');
// if (temp >= 10 && temp <=22 ) {
//     console.log('lets go to study');
// } else {
//     console.log("study Online");
// }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді
//     вивести Повідомлення - що число не вірне ... .
//
// switch (+prompt('number')) {
//     case 1:
//         console.log('auto');
//         break;
//     case 2:
//         console.log('moto');
//         break;
//     case 3:
//         console.log('phone');
//         break
//     case 4:
//         console.log('pen');
//         break;
//     case 5:
//         console.log('sweets');
//         break;
//     default :
//         console.log('ne virno');
// }