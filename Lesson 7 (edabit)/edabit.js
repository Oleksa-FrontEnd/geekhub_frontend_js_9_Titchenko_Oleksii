//"use scrict"

let res = [];
function fa(n) {

    for(let i = 1; i <= n; i++)
    res.push(i);
    return res;
}
console.log(fa(11));
//суммируем массив res
function foo(res){

    let sum = 0;
    for(let i = 0; i<res.length; i++){
        sum += res[i];
    }
    return sum;
}
console.log(foo(res));
/******************************************************************************************/

let name = prompt('Введте имя');
let num = prompt('Введите 0 или 1');

function greeting(name, num){

    if (num == '0'){
        console.log("Buy " + ucFirst(name));
    } else if (num == '1'){
        console.log("Hello " + ucFirst(name));
    } else {
        console.log('Вводить надо 0 или 1')
    }
    function ucFirst(name) {
        if (!name) return name;

        return name[0].toUpperCase() + name.slice(1);
        name = ucFirst(name);
    }

}
//ucFirst Переводит первый символ в верхний регистр
    /*function ucFirst(name) {
        if (!name) return name;

        return name[0].toUpperCase() + name.slice(1);
        name == ucFirst(name);
    }*/

//greeting(name, num);

//console.log(greeting("алиса", 1));


/*
let sum = 0;
for (let number of numbers) {
    sum += number;
}
return sum;
}*/

/*
function numberSum(n) {
    var res = [];
    for (var i=1; i <= n; i++)
    res.push(i);
    return res;
}
console.log (numberSum(7));

function foo(numberSum(){
    let sum = 0;
    for(let i=0; i<numberSum.length; i++){
        sum += numberSum[i];
    }
    return sum;
}
console.log(foo(numberSum(7)));*/
