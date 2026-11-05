// Завдання 1
// За допомогою prompt запитати як звуть користувача.
// За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач
const name = prompt("What is your name?");
alert(`Hello, ${name}! How are you?`);


// Завдання 2
// Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів
const a = 10;
const b = 3;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);


// Завдання 3
// Створити скрипт, який отримує два значення і виводить true, якщо значення рівні, false - якщо ні
const val1 = 5;
const val2 = 5;
console.log(val1 === val2);


// Завдання 4
// Визначити середнє арифметичне трьох чисел
const num1 = 10;
const num2 = 20;
const num3 = 30;
const average = (num1 + num2 + num3) / 3;
console.log("Average:", average);


// Завдання 5
// Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл
// (використовувати оператор "розподіл по модулю" (%))
const number = 54321;
const digit1 = Math.floor(number / 10000);
const digit2 = Math.floor((number % 10000) / 1000);
const digit3 = Math.floor((number % 1000) / 100);
const digit4 = Math.floor((number % 100) / 10);
const digit5 = number % 10;
console.log(digit1, digit2, digit3, digit4, digit5);
