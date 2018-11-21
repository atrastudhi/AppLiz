const Model = require("../models")

class TransactionController{
    static buyItem(req,res){
        let itemId = req.params.id
        let customerId = req.session.user.id
        let obj = {
            ItemId: itemId,
            CustomerId: customerId,
        }

        Model.Transaction.create(obj)
            .then(data=>{
                res.send(data)
            })
            .catch(err=>{
                res.send(err)
            })
    }
}

module.exports = TransactionController