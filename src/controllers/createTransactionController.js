const createTransactionUseCase = require ('../useCases/createTransactionUseCase')

function createTransaction (request, response) {
    const body = request.body
    
    if (!body.title || !body.type || !body.category || !body.amount){
        return response.status(400).json({error:'missing id or type or value'})
    }

    // if (transaction.find( t => t.id == body.id)){
    //     return response.status(400).json({error:'transaction already exists'})
    // }
    
    createTransactionUseCase.execute(body)
    return response.status(201).json(body)
}

module.exports = {createTransaction}