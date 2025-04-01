const transactions = require('./transactions');
const {
    getUniqueTransactionTypes,
    calculateTotalAmount,
    calculateTotalAmountByDate,
    getTransactionByType,
    getTransactionsInDateRange,
    getTransactionsByMerchant,
    calculateAverageTransactionAmount,
    getTransactionsByAmountRange,
    calculateTotalDebitAmount,
    findMostTransactionsMonth,
    findMostDebitTransactionMonth,
    mostTransactionTypes,
    getTransactionsBeforeDate,
    findTransactionById,
    mapTransactionDescriptions
} = require('./functions');

// Тестирование функций
console.log("Уникальные типы транзакций:", getUniqueTransactionTypes(transactions));
console.log("Общая сумма транзакций:", calculateTotalAmount(transactions));
console.log("Сумма транзакций за июнь 2024:", calculateTotalAmountByDate(transactions, 2024, 6));
console.log("Дебетовые транзакции:", getTransactionByType(transactions, "debit"));
console.log("Транзакции с 2024-04-01 по 2024-06-30:", getTransactionsInDateRange(transactions, "2024-04-01", "2024-06-30"));
console.log("Транзакции для Coffee Corner:", getTransactionsByMerchant(transactions, "Coffee Corner"));
console.log("Средняя сумма транзакций:", calculateAverageTransactionAmount(transactions));
console.log("Транзакции в диапазоне от 50 до 300:", getTransactionsByAmountRange(transactions, 50, 300));
console.log("Общая сумма дебетовых транзакций:", calculateTotalDebitAmount(transactions));
console.log("Месяц с наибольшим количеством транзакций:", findMostTransactionsMonth(transactions));
console.log("Месяц с наибольшим количеством дебетовых транзакций:", findMostDebitTransactionMonth(transactions));
console.log("Каких транзакций больше всего:", mostTransactionTypes(transactions));
console.log("Транзакции до 2025-01-01:", getTransactionsBeforeDate(transactions, "2025-01-01"));
console.log("Транзакция с ID 103:", findTransactionById(transactions, "103"));
console.log("Описания транзакций:", mapTransactionDescriptions(transactions));