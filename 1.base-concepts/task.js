"use strict"
function solveEquation(a, b, c) {
  let resultFunction = [];
  let D = Math.pow(b, 2)-4*a*c;
  if(D == 0){
    let x1 = -b/(2*a);
    resultFunction.push(x1);
  } if(D > 0){
    let x1 = (-b + Math.sqrt(D) )/(2*a); 
    let x2 = (-b - Math.sqrt(D) )/(2*a);
    resultFunction.push(x1,x2);
  }
  return resultFunction;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100;
  let S = amount - contribution;
  let P = percent / 12;
  let n = countMonths;
  let payment = S * (P + (P / (Math.pow((1 + P),n) - 1)));
  let sumPayment = (payment * n);
  sumPayment = Math.round(sumPayment * 100) / 100;
  return sumPayment;
}
