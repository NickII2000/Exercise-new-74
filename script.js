'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(MutationRecords => {
    console.log(MutationRecords);
});

observer.observe(box, {
    childList: true
});

// observer.disconnect();


// 75. Функции-конструкторы

const num = new Number(3);
console.log(num);

const fun = new Function();
console.log(fun);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello, ${this.name}`);
    };
}

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} вышел`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);
// const nick = new User('Nick', 30);

ivan.exit();
alex.exit();
// nick.exit();

console.log(ivan);
console.log(alex);
// console.log(nick);

ivan.hello();
alex.hello();
// nick.hello();

// console.log(User.prototype);

// 76. Контекст вызова. This

function showThis() {
    console.log(this);
}
showThis();