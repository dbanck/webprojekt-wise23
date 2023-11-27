function calculatePrice(age) {
  let calculatedPrice;

  if (age < 10) {
    calculatedPrice = 5;
  } else if (age > 65) {
    calculatedPrice = 7;
  } else {
    calculatedPrice = 10;
  }

  return calculatedPrice;
}
