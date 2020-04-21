const credits = 23580;
const pricePerDroid = 3000;
const droidTotalAmount = prompt('Сколько дроидов Вы хотите приобрести?');
let totalPrice;
let creditBalance;

if (droidTotalAmount === null) {
  alert('Отменено пользователем!');
} else if (droidTotalAmount > 0 && Number.isInteger(+droidTotalAmount)) {
  totalPrice = Number(droidTotalAmount) * pricePerDroid;
  alert(`Сумма ${totalPrice}`);
} else {
  alert('Ошибка!');
}

if (totalPrice > credits) {
  alert('Недостаточно средств на счету!');
} else if (totalPrice <= credits) {
  creditBalance = credits - totalPrice;
  alert(
    `Вы купили ${droidTotalAmount} дроидов, на счету осталось ${creditBalance} кредитов.'`,
  );
}
