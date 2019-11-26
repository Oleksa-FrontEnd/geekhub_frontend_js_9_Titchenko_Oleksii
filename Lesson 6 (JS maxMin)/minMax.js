"use strict"
let question = prompt('Вы согласны?');
ask (question, yes, no) {

    (yes) =>  alert('Вы согласились'):
    (no) => alert ("Вы отменили выполнение.");
    return (ask);
};


/*let word1 = prompt('Введите первое слово' );
let word1 = prompt('Введите второе слово');

for (i=0; i>word1.length; i++);
for (j=0; j>word2.length; j++);
if*/




let myArray = [11, 34, 3, 34, -4, 85, 7];

//сумма элементов массива вариант 1
function arraySum(myArray){
    let sum = 0;
    for(let i = 0; i < myArray.length; i++){
        sum += myArray[i];
    }
    console.log(sum);
}
arraySum(myArray); //вызов func  где в консоль вывод сумма элементов массива
//сумма элементов массива вариант 2
let total = myArray.reduce(function(a, b) {
    return a + b;
});
console.log(total);

//Max and Min
let maxNumber = Math.max.apply(Math, myArray);
let minNumber = Math.min.apply(Math, myArray);
//console.log.log(maxNumber); //вариант 1
//console.log(minNumber); //вариант 1
console.log(Math.max(...myArray)); //вариант 2
                   //^^^ Spread operator
console.log(Math.min(...myArray)); //вариант 2

//maxNumber заменяем minNumber (c let не работает)
var index = myArray.indexOf(maxNumber);
if (~index) {
    myArray[index] = minNumber;
}
//minNumber заменяем maxNumber
var index = myArray.indexOf(minNumber);
if (~index) {
    myArray[index] = maxNumber;
}
console.log(myArray);

//Create function which will return function with callback in arguments
function showMsg(name, status, callback){
    if (callback && typeof callback === 'function'){
        callback();
    } else {
        console.log(`Hello ${name}, you status is ${status}`);
    }
}
showMsg('Jonn', 'admin', () => {
    console.log('Hello message not suported.')
})
//showMsg('Jonn', 'admin');


