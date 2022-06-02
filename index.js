// Исправленный вариант
const firstNumber = Number(prompt('Enter first number'));

const operation = prompt('Enter operator');

const secondNumber = Number(prompt('Enter second number'));


if (isNaN(firstNumber) || isNaN(secondNumber)){ // проверка на число
  alert ('Некорректный ввод данных');

} else if (operation ==='+'){
  alert ('Ваш результат:  '+ (firstNumber+secondNumber));

} else if (operation ==='-'){
  alert ('Ваш результат:  '+ (firstNumber-secondNumber));

} else if (operation ==='/'){
    alert ('Ваш результат:  '+ (firstNumber/secondNumber));

} else if (operation ==='*'){
      alert ('Ваш результат:  '+ (firstNumber*secondNumber));
} else {
  alert ('Такой операции не существует');
}



// Старый вариант

// if (operation ==='-') {
//   x = (firstNumber - secondNumber)
//   alert ('Ваш результат:  ' + x );

// } else if (operation ==='+'){
//   x = (firstNumber + secondNumber)
//   alert ('Ваш результат:  ' + x );
 
// }else if (operation ==='*'){
//   x = (firstNumber * secondNumber)
//   alert ('Ваш результат:  ' + x );
 

// }else if (operation ==='/'){
//   x = (firstNumber / secondNumber)
//   alert ('Ваш результат:  ' + x );

// }else {
//   alert ('Taкой операции не существует');
// }