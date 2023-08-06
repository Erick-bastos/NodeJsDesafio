const { Router } = require ('express')
const { createTransaction } = require ('../../controllers/createTransactionController')
const { listTransactions } = require ('../../controllers/listTransactionsController')


const routes = Router ()

routes.get('/transactions', listTransactions)

routes.post('/transaction', createTransaction)

module.exports = routes