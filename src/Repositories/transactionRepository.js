const transactions = require('../infra/db/dados')

function create (transaction){
    transactions.push(transaction)
}

function findAll () {
    return transactions
}

module.exports = { create, findAll}