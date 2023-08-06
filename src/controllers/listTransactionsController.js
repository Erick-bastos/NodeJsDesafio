const listTransactionsUseCase = require ("../useCases/listTransactionsUseCase")

function listTransactions (request, response) {
    const transactions = listTransactionsUseCase.execute()
    return response.status(200).json(transactions)
}

module.exports = { listTransactions }