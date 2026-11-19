// Завдання
// Створити сутність людини: ім'я, вік, метод виведення даних.
// Створити сутність автомобіля: характеристики окремими властивостями,
// методи виведення даних та присвоєння власника.
// Усі дані отримувати від користувача.
// Реалізувати перевірки: порожні поля, вік > 18.


class Person {
    constructor(name, age) {
        if (!name || name.trim() === "") throw new Error("Ім'я не може бути порожнім.");
        if (!age || isNaN(age)) throw new Error("Вік має бути числом.");
        if (Number(age) <= 18) throw new Error("Вік має бути більше 18 років.");

        this.name = name.trim();
        this.age = Number(age);
    }

    printInfo() {
        console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
    }
}


class Car {
    constructor(brand, model, year, color) {
        if (!brand || brand.trim() === "") throw new Error("Марка не може бути порожньою.");
        if (!model || model.trim() === "") throw new Error("Модель не може бути порожньою.");
        if (!year || isNaN(year)) throw new Error("Рік має бути числом.");
        if (!color || color.trim() === "") throw new Error("Колір не може бути порожнім.");

        this.brand = brand.trim();
        this.model = model.trim();
        this.year = Number(year);
        this.color = color.trim();
        this.owner = null;
    }

    printInfo() {
        console.log(`Автомобіль: ${this.brand} ${this.model}, ${this.year} р., ${this.color}`);
        console.log(`Власник: ${this.owner ? this.owner.name : "не призначений"}`);
    }

    assignOwner(person) {
        this.owner = person;
        console.log(`Власник ${person.name} призначений.`);
    }
}


// --- Запуск ---

try {
    const person = new Person(prompt("Ім'я:"), prompt("Вік:"));
    person.printInfo();

    const car = new Car(
        prompt("Марка:"),
        prompt("Модель:"),
        prompt("Рік:"),
        prompt("Колір:")
    );
    car.printInfo();

    car.assignOwner(person);
    car.printInfo();

} catch (error) {
    console.error("Помилка:", error.message);
}
