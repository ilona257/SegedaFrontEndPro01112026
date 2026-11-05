// Завдання 1
// Вивести числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5….)
let result1 = "";
for (let i = 20; i <= 30; i += 0.5) {
    result1 += i + " ";
}
console.log(result1.trim());


// Завдання 2
// Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
const rate = 40;
for (let dollars = 10; dollars <= 100; dollars += 10) {
    console.log(`${dollars} USD = ${dollars * rate} UAH`);
}


// Завдання 3
// Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
const N = 50;
let result3 = "";
for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        result3 += i + " ";
    }
}
console.log(`Числа від 1 до 100, квадрат яких не перевищує ${N}:`, result3.trim());


// Завдання 4
// Дано ціле число. З'ясувати, чи воно простим
// (простим називається число, більше ніж 1, які мають інших дільників крім 1 і себе)
const num = 17;
let isPrime = num > 1;
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(`Число ${num} є простим:`, isPrime);


// Завдання 5
// Дано деяке число. Визначити, чи можна отримати це число, піднявши число 3 до певного натурального ступеня.
// (Як приклад, числа 9 та 81 можна отримати цим способом, але 13 – ні.)
const target = 81;
let power = 3;
let isPowerOfThree = false;
while (power <= target) {
    if (power === target) {
        isPowerOfThree = true;
        break;
    }
    power *= 3;
}
console.log(`Число ${target} є степенем числа 3:`, isPowerOfThree);
