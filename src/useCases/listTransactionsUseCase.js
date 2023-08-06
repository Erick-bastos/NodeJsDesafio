const repository = require ('../Repositories/transactionRepository')


function execute () {
    return repository.findAll()
}

module.exports = { execute }