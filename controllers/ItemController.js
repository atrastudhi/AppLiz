const Model = require('../models')
const Helper = require('../helper/helper')

class ItemController{
    static showAllItem(req,res){
        Model.Item.findAll()
        .then(data=>{
            res.send(data)
            // res.render("listItem.ejs")
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = ItemController