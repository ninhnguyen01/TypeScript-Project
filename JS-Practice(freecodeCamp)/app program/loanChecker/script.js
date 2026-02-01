let minIncomeForDuplex = 60000;
let minCreditScoreForDuplex = 700;

let minIncomeForCondo = 45000;
let minCreditScoreForCondo = 680;

let minIncomeForCar = 30000;
let minCreditScoreForCar = 650;

const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg = getLoanMessage(65000, 690);
const carLoanMsg = getLoanMessage(45000, 660);
const noLoanMsg = getLoanMessage(25000, 550);

function getLoanMessage(annualIncome, creditScore) {
    if ((annualIncome >= minIncomeForDuplex) && (creditScore >= minCreditScoreForDuplex)) {
        return "You qualify for a duplex, condo, and car loan."
    }
    else if ((annualIncome >= minIncomeForCondo) && (creditScore >= minCreditScoreForCondo)) {
        return "You qualify for a condo and car loan."
    }

    else if ((annualIncome >= minIncomeForCar) && (creditScore >= minCreditScoreForCar)) {
        return "You qualify for a car loan."
    }

    else if ((annualIncome < minIncomeForCar) && (creditScore < minCreditScoreForCar)) {
        return "You don't qualify for any loans."
    }
}

console.log(duplexLoanMsg)
console.log(condoLoanMsg)
console.log(carLoanMsg)
console.log(noLoanMsg)
