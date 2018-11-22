const Model = require('../models')
const Helper = require('../helper/helper')
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

class ItemController {

    static showAllItem(req, res){
        Model.Item.findAll()
        .then(data=>{
            res.render('pages/listItem.ejs',{data:data, info:req.query.info})
        })
        .catch(err=>{
            res.redirect(`/item?info=${err}`)
        })
    }

    static showSearchBar(req,res){
        res.render('pages/itemSearchPage.ejs')
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