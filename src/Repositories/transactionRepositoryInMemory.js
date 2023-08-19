const {transactions} = require('../infra/db/dados')


class TransactionRepositoryInMemory {
    create (transaction){
        transactions.push(transaction)
    }

    findAll () {
        return transactions
    }

}

module.exports = TransactionRepositoryInMemory