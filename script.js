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
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);