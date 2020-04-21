const total = 100;
const ordered = 50;

if (ordered > total || ordered <= 0) {
  console.log('На складе недостаточно товаров!');
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер.');
}
