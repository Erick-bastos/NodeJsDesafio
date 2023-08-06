const repository = require ('../Repositories/transactionRepository')

function execute (body) {
    repository.create(body)
}

module.exports = {execute}
