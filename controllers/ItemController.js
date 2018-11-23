const Model = require('../models')
const Helper = require('../helper/helper')
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

class ItemController {

    static showItemAdmin(req, res){
        Model.Item.findAll()
        .then(data=>{
            res.render('pages/adminPage', {data: data, info: req.query.info})
        })
        .catch(err=>{
            res.redirect(`/item?info=${err}`)
        })
    }

    static showSearchBar(req,res){
        res.render('pages/itemSearchPage.ejs', {admin: false, info: req.query.info})
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

    static showAllItem(req,res){
        let info = req.query.info
        Model.Item.findAll()
        .then(data=>{
            res.render('pages/listItem.ejs',{data:data,info:info})
        })
        .catch(err=>{
            res.redirect(`?info=${err}`)
        })
    }

    static addItemGet(req,res){
        res.render("pages/addItemForm.ejs")
    }

    static addItemPost(req,res){
        let body = req.body
        Model.Item.create(body)
        .then(data=>{
            let info = `success add item`
            res.redirect(`/admin?info=${info}`)
        })
        .catch(err=>{
            res.redirect(`/admin?info=${err}`)
        })
    }

    static editItemGet(req,res){
        let itemId = req.params.itemId
        Model.Item.findOne({
            where : { id : itemId}
        })
        .then(data=>{
            res.render('pages/editItem.ejs',{id:itemId,data:data})
        })
        .catch(err=>{
            res.redirect('/admin')
        })
    }

    static editItemPost(req,res){
        let itemId = req.params.itemId
        let body = req.body

        Model.Item.update(body,{
            where:{ id : itemId}
        })
        .then(data=>{
            let info = `succes update data item`
            res.redirect(`?info=${info}`)
        })
        .catch(err=>{
            let info = `succes update data item`
            res.redirect(`/admin?info=${info}`)
        })

    }

    static deleteItem(req,res){
        let itemId = req.params.itemId
        Model.Item.destroy({
            where:{
                id: itemId
            }
        })
        .then(data=>{
            let info = `success delete item`
            res.redirect(`/admin?info=${info}`)
        })
        .catch(err=>{
            res.redirect(`/admin?info=${err}`)
        })
    }
}

module.exports = ItemController