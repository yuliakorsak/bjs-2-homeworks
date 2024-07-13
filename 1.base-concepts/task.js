"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d === 0) {
    arr.push(-b / (2 * a));
  }
  else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = percent / 1200;
  let mortgageBase = amount - contribution;
  let monthlyPayment = mortgageBase * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
  let total = (monthlyPayment * countMonths).toFixed(2);
  return +total;
}