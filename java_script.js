/**
 * Вычисляет ежемесячный платёж по сроку ипотеки
 *
 * @param {float} sum - сумма кредита
 * @param {integer} period - срок в годах
 * @param {float} rate - годовая ставка в процентах
 * @return {integer} или Nan
 */
// function getPayment(sum, period, rate) {
//     const i = (rate / 12) / 100;
//     const coefficient = (i * (Math.pow(1 + i, period * 12))) / (Math.pow(1 + i, period * 12) - 1);
//     const result = sum * coefficient;
//     return Number(result.toFixed());
// };

// sum = 2500000;
//    period = 30;
// rate = 0.069;

function getPayment(sum3, period, rate) {
    debugger
    sum1 = Number(document.querySelector('#totalCoast').value);
    sum2 = Number(document.querySelector('#firstFee').value);
    sum3 = sum1 - sum2;
    period = Number(document.querySelector('#creditTime').value);
    rate = 6.9;
const i = (rate / 12) / 100;
const coefficient = (i * (Math.pow(1 + i, period * 12))) / (Math.pow(1 + i, period * 12) - 1);
let result = sum3 * coefficient;
let creditBalance = sum3 - result;

if (result >= 50000) { 
    document.querySelector('.result').style.color = "red"; 
}
 
document.querySelector('.creditBalance').innerHTML = String(creditBalance.toFixed(2));
document.querySelector('.result').innerHTML = String(result.toFixed(2));
}

document.querySelector('.calc-btn').addEventListener('click', getPayment);