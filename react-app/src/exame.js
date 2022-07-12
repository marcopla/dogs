const possibleCoinValues = [25, 10, 5, 1];

const value = 15;
let coinCounter = [0, 0, 0, 0];
let count = value;
function discountValue(value) {
  possibleCoinValues.forEach((coinValue) => {
    if (value >= coinValue) {
      count = value - coinValue;
      coinCounter[possibleCoinValues.indexOf(coinValue)]++;
      console.log(coinCounter);
    }
    discountValue(count);
  });
  //return count;
}

discountValue(value);
