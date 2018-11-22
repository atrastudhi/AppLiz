const Model = require("../models")

class TransactionController{
    static buyItem(req,res){
        let itemId = req.params.id
        let UserId = req.session.user.id
        let obj = {
            ItemId: itemId,
            UserId: UserId
        }
        console.log(obj)

        Model.Transaction.create(obj)
            .then(data=>{
                res.send(data)
            })
            .catch(err=>{
                res.send(err)
            })
    }

    static list (req, res) {
        Model.User.findAll({
            include: {
                model: Model.Item
            }
        })
            .then(data => {
                res.render('pages/transactionList', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = TransactionController