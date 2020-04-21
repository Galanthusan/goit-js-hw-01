let input = prompt('Введите число:');
let total = 0;

do {
  if (input === null) {
    break;
  }
  total = total + Number(input);
  console.log(total);
  input = prompt('Введите число:');
} while (input);
alert(`Общая сумма чисел равна ${total}`);
