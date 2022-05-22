// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// function user(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let array = [];
// let user1 = new user(4, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789);
// let user2 = new user(5, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789);
// let user3 = new user(6, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789);
// let user4 = new user(7, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789);
// let user5 = new user(1, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789);
// let user6 = new user(2, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789);
// let user7 = new user(3, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789);
// let user8 = new user(9, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789);
// let user9 = new user(8, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789);
// let user10 = new user(10, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789);
// array = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
// // let users = array.filter(value => value.id % 2 === 0);
// // console.log(users);
// let users = array.sort((a, b) => a.id - b.id);
// console.log(users);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// class user {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let array = [];
// let user1 = new user(4, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789, ['bread', 'milk']);
// let user2 = new user(5, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789,['bread', 'milk', 'cheese'] );
// let user3 = new user(6, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789,['bread', 'milk'] );
// let user4 = new user(7, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789,['bread', 'milk', 'cheese', 'lime', 'tomato']);
// let user5 = new user(1, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789,['bread', 'milk']);
// let user6 = new user(2, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789,['bread', 'milk', 'cheese', 'lime'] );
// let user7 = new user(3, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789,['bread', 'milk']);
// let user8 = new user(9, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789,['bread', 'milk']);
// let user9 = new user(8, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789,['bread', 'milk', 'cheese'] );
// let user10 = new user(10, 'sasha', 'bernatskiy', 'sb20@gmail.com', 123456789,['bread', 'milk'] );
// array = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
// let users = array.sort((a, b) => a.order.length - b.order.length);
// console.log(users);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car (model, producer, year, maxspeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.drive = function () {
//         // console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//
//     };
//     this.info = function () {
//         for (const item in this) {
//             console.log(`${item} - ${this[item]}`);
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed += newSpeed;
//     };
//     this.changeYear = function (newYear) {
//         this.year += newYear;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
// }
// let newCar = new Car('bmw', 'germany', 2021, 280, 4.4);
// // newCar.drive();
// // newCar.info();
// newCar.increaseMaxSpeed(50);
// newCar.changeYear(1);
// newCar.addDriver('sasha');
// console.log(newCar);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, +
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, producer, year, maxspeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volume = volume;
//     }
//
//     drive() {
//             // console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);f
//
//         };
//     info () {
//             for (const item in this) {
//                 // console.log(`${item} - ${this[item]}`);
//             }
//         };
//     increaseMaxSpeed (newSpeed) {
//             this.maxspeed += newSpeed;
//         };
//     changeYear (newYear) {
//             this.year += newYear;
//         };
//     addDriver (driver) {
//             this.driver = driver
//         }
//     }
//
//
// let newCar = new Car('bmw', 'germany', 2021, 280, 4.4);
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(50);
// newCar.changeYear(1);
// newCar.addDriver('sasha');
// console.log(newCar);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// function Cinderella (name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// let arrCinderella = [
//     new Cinderella('khristina', 20, 38),
//     new Cinderella('karina', 22, 40),
//     new Cinderella('marina', 18, 36),
//     new Cinderella('katia', 20, 39),
//     new Cinderella('sveta', 20, 41)
// ];
//
// function Prince (name, age, findSize) {
//     this.name = name;
//     this.age = age;
//     this.findSize = findSize;
// }
// let newPrince = new Prince('sasha', 22, 38);
//
// let find = (arrCinderella, Prince) => {
//     for (const item of arrCinderella) {
//         if (item.footSize === Prince.findSize) {
//             return `${item.name}`
//         }
//     }
// };
//
// console.log(find(arrCinderella, newPrince));
//
// let Cind = arrCinderella.find(value => value.footSize === newPrince.findSize);
// console.log(Cind);