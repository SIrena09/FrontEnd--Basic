// Задание 1:


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



// Задание 2:

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


 


