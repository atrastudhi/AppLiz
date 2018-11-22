const Model = require('../models')
const Helper = require('../helper/helper')
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

class ItemController {

    static showItemAdmin(req, res){
        Model.Item.findAll()
        .then(data=>{
<<<<<<< HEAD
            res.render('pages/listItem.ejs',{data:data, info:req.query.info})
=======
            res.render('pages/adminPage', {data})
>>>>>>> 787e8494c2c7904116bdc34563eea6fb772d440c
        })
        .catch(err=>{
            res.redirect(`/item?info=${err}`)
        })
    }

    static showSearchBar(req,res){
        res.render('pages/itemSearchPage.ejs', {admin: false})
    }

    static searchItem(req,res){
        let info = req.query.info
        let body = req.body
        let obj = {}

        for(let key in body){
            if(body[key].length === 0){
                delete [key]
            } else if(key === "price"){
                obj.price = {'$lte' : Number(body[key])}
            } else if(key === 'item'){
                obj[key] = {'$like' : `%${body[key]}%` }
            }
        }

        Model.Item.findAll({
            where: obj
        })
        .then(data=>{
            res.render('pages/listItem.ejs',{data:data,info:info})
        })
        .catch(err=>{
            res.redirect(`?info=${err}`)
        })
    }

    static editItem(req,res){

    }

    static deleteItem(req,res){
        
    }
}

module.exports = ItemController