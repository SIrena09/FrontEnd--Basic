// Дан массив const arr = [54, 63, 76, 34, 21, 57, 25, 301, 94];
// вывести в консоль наибольшее число из этого массива

const array =[54, 63, 76, 34, 21, 57, 25, 301, 94];
let max = Math.max(...array);


console.log(max);

// С помощью цикла создать пустой массив, наполнить массив двузначными числами которые
// делятся на 3 (с нулевым остатком)

const arr = [];

for(let i = 10; i <= 99; i++){
    if(i % 3 === 0){
        arr.push(i);
    }

}
console.log(arr);