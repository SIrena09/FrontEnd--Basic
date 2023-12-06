// Задание 1: Пользователь вводит 4 числа вывести на экран, сколько штук из этих чисел были четными


let num1 = prompt('num1');
let num2 = prompt('num2');
let num3 = prompt('num3');
let num4 = prompt('num4');

let count = 0;

if(num1 % 2 === 0){
    count++;
}
if(num2 % 2 === 0){
    count++;
}
if(num3 % 2 === 0){
    count++;
}
if(num4 % 2 === 0){
    count++;
}

  
  document.write(`Количество четных чисел: ${count}`);



// Задание 2: Пользователь вводит 3 числа, вывести на экран наибольшее из этих 3х чисел


let a = prompt('Введите первое число: ' );
let b = prompt('Введите второе число: ' );
let c = prompt('Введите третье число: ' );

if(a >= b && a >= c){
    document.write(`Наибольшее число: ${a}`);
} else if(b >= a && b >= c){
    document.write(`Наибольшее число: ${b}`);
} else {
    document.write(`Наибольшее число: ${c}`);
}


 


