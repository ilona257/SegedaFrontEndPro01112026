// Завдання
// Реалізуйте функцію generateKey(length, characters), що повертає рядок випадкових символів
// із набору characters довжиною length.
// Наприклад:
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

function generateKey(length, characters) {
    let key = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters[randomIndex];
    }
    return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);
