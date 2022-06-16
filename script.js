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