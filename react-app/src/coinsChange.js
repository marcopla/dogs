const centsValues = [25, 10, 5, 1];

const value = 15;
const zeroArray = [0, 0, 0, 0];
let coinCounter = zeroArray;
let currentAmount = value;
let previousAmount = currentAmount;
let indexCoinValue = 0;
let allCoinsCombinations = new Set();
let indexSet = 0;

function verifyIfCurrentBiggerThanCents(i, currentAmount){
  if (currentAmount >= centsValues[i]) {
    previousAmount = currentAmount;
    currentAmount = currentAmount - centsValues[i];
    coinCounter[i]++;
    verifyIfCurrentBiggerThanCents(i, currentAmount);

    if ((currentAmount !== 0) && () ){
      discountValue(i, currentAmount);
    } else {
      allCoinsCombinations[indexSet++] = coinCounter;
      coinCounter = zeroArray;
    }
}
}

function discountValue(indexCoinValue, currentAmount) {
  for (let i = indexCoinValue; i < centsValues.length - 1; i++) {
    verifyIfCurrentBiggerThanCents(i, currentAmount);
  }
}

discountValue(indexCoinValue, currentAmount);
