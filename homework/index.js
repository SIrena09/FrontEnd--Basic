// 1. Пользователь вводит год своего рождения, вывести
// информацию о возрасте пользователя в разные года
// до текущего. Например, вводим «2003». Вывод: «в
// 2003 было 1 год», «в 2004 было 2 год», «в 2005 было
// 3 год» и т.д.


let userBirthYear = prompt('Введите год своего рождения: ');
let thisYear = 2023;

if(!isNaN(userBirthYear)){
    userBirthYear = Number(userBirthYear);
}else{
    console.log('ERROR!')
}

for(let year= userBirthYear; year <= thisYear; year++){
    let userAge = year - userBirthYear + 1;
    console.log(' В '  + year +  ' было ' + userAge +  ' лет ' );

}



// 2. Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// ошибку.

let prevNum = prompt('Введите число: ');
let output = '' + prevNum;


if (!isNaN(prevNum)) {
    prevNum = Number(prevNum);
} else {
    console.log('ERROR!')
}

for (let i = 0; i < 5; i++) {
    let num = prompt('Введите следующее число, больше чем ' + prevNum);
    if (isNaN(num)) {
        console.log('ERROR!')
        break;
    } else if (num < prevNum) {
        console.log('ERROR! ' + num + ' меньше ' + prevNum);
        break;
    } else {
        output += ', ' + num;
        prevNum = num;
    }
    console.log('Числа в порядке возрастания: ' + output);
}