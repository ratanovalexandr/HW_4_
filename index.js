
const firstNumber = Number(prompt('Enter first number'));

const operation = prompt('Enter operator');

const secondNumber = Number(prompt('Enter second number'));



if (operation ==='-') {
  x = (firstNumber - secondNumber)
  alert ('Ваш результат:  ' + x );

} else if (operation ==='+'){
  x = (firstNumber + secondNumber)
  alert ('Ваш результат:  ' + x );
 
}else if (operation ==='*'){
  x = (firstNumber * secondNumber)
  alert ('Ваш результат:  ' + x );
 

}else if (operation ==='/'){
  x = (firstNumber / secondNumber)
  alert ('Ваш результат:  ' + x );

}else {
  alert ('Taкой операции не существует');
}