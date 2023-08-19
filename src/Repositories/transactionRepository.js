const TransactionModel = require ('../models/transaction')
const { startConnection, closeConnection} = require('../infra/db/mongodb')

class TransactionRepository {

    async create (transaction){
        await startConnection()
        await TransactionModel.create(transaction)
        await closeConnection()
    }

    async findAll () {
        await startConnection()
        const transactions = await TransactionModel.find()
        await closeConnection()
        return transactions

    }

}

module.exports = TransactionRepository