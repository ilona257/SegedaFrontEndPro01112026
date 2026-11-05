// Завдання 1
// Дано два різні числа. Визначити, яке з них більше, а яке менше.
const x = 17;
const y = 42;
console.log("Більше:", x > y ? x : y);
console.log("Менше:", x < y ? x : y);


// Завдання 2
// Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?
const km = 2;
const feet = 5000;
const kmInMeters = km * 1000;
const feetInMeters = feet * 0.305;
console.log(`${km} км = ${kmInMeters} м`);
console.log(`${feet} футів = ${feetInMeters} м`);
console.log("Менша відстань:", kmInMeters < feetInMeters ? `${km} км` : `${feet} футів`);


// Завдання 3
// Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)
const a = 4;
const b = 20;
console.log(`${a} є дільником ${b}:`, b % a === 0);
console.log(`${b} є дільником ${a}:`, a % b === 0);


// Завдання 4
// Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.
const num = 347;
const lastDigit = num % 10;
console.log("Остання цифра:", lastDigit);
console.log("Остання цифра парна:", lastDigit % 2 === 0);


// Завдання 5
// Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?
const twoDigit = 73;
const firstDigit = Math.floor(twoDigit / 10);
const secondDigit = twoDigit % 10;
console.log(`Перша цифра: ${firstDigit}, друга цифра: ${secondDigit}`);
console.log("Більша цифра:", firstDigit > secondDigit ? `перша (${firstDigit})` : `друга (${secondDigit})`);


// Завдання 6
// Дано тризначне число.
// Визначити чи є парною сума його цифр.
// Визначити, чи кратна сума цифр п'яти.
// Визначити чи є добуток його цифр більше 100.
const threeDigit = 435;
const d1 = Math.floor(threeDigit / 100);
const d2 = Math.floor((threeDigit % 100) / 10);
const d3 = threeDigit % 10;
const digitSum = d1 + d2 + d3;
const digitProduct = d1 * d2 * d3;
console.log(`Цифри числа ${threeDigit}: ${d1}, ${d2}, ${d3}`);
console.log("Сума цифр:", digitSum);
console.log("Сума цифр парна:", digitSum % 2 === 0);
console.log("Сума цифр кратна 5:", digitSum % 5 === 0);
console.log("Добуток цифр більше 100:", digitProduct > 100);


// Завдання 7
// Дано тризначне число.
// Чи правда, що всі цифри однакові?
// Чи є серед цифр однакові?
const threeDigit2 = 121;
const c1 = Math.floor(threeDigit2 / 100);
const c2 = Math.floor((threeDigit2 % 100) / 10);
const c3 = threeDigit2 % 10;
console.log(`Цифри числа ${threeDigit2}: ${c1}, ${c2}, ${c3}`);
console.log("Всі цифри однакові:", c1 === c2 && c2 === c3);
console.log("Є однакові цифри:", c1 === c2 || c2 === c3 || c1 === c3);


// Завдання 8
// Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)
const sixDigit = 123321;
const s = sixDigit.toString();
const isMirror = s[0] === s[5] && s[1] === s[4] && s[2] === s[3];
console.log(`Число ${sixDigit} є дзеркальним:`, isMirror);
