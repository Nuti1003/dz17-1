if(a = prompt("Введите ваше имя")) {
   alert("Привет, " + a);
} else {
   alert("Ошибка");
}

const arr1 = [123, 465, 24, 64];
const arr2 = [3, 4, 456, 367, 967];

let b = arr1.length
let c = arr2.length

if(b > c){
   console.log('Первый массив больше чем второй');
} else if(c > b){
   console.log('Второй массив больше чем первый');
} else {
   console.log('Они равны');
}