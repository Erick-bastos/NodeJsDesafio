const createTransactionUseCase = require ('../useCases/createTransactionUseCase')

async function createTransaction (request, response) {
    const body = request.body
    const {title, type, category, amount} = body
    
    if (!title || !type || !category || !amount){
        return response.status(400).json({error:'missing id or type or value'})
    }
    
    await createTransactionUseCase.execute(body)
    return response.status(201).json(body)
}

module.exports = {createTransaction}

    // if (transaction.find( t => t.id == body.id)){
    //     return response.status(400).json({error:'transaction already exists'})
    // }