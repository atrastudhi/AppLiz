const Model = require('../models')
const Helper = require('../helper/helper')

class UserController {

    static registerForm (req, res) {
        res.render('pages/registerForm', {info: req.query.info})
    } 

    static addUser (req, res) {
        let data = req.body
        Model.User.create({
            email: data.email,
            password: data.password,
            role: 'customer'
        })
         .then(data => {
             res.redirect(`/home?info='register success`)
         })
         .catch(err => {
             res.redirect(`/user/register?info='${err}'`)
         })
    }

    static loginForm (req, res) {
        res.render('pages/loginForm', {info: req.query.info})
    }
    
    static login (req, res) {
        let body = req.body
        Model.User.findOne({
            where: {
                email: body.email
            }
        })
            .then(data => {
                if(!data) {
                    throw new Error('wrong email!')
                } else {
                    let check = Helper.check(body.password, data.password)
                    if(check === true) {
                        req.session.user = {
                            id: data.id,
                            email: data.email,
                            role: data.role
                        }
                        res.redirect(`/home?info='login success`)
                    } else {
                        res.redirect(`/user/login?info='wrong password!`)
                    }
                }
            })
            .catch(err => {
                res.redirect(`/user/login?info='${err}'`)
            })
        }
        
        static logout (req, res) {
            req.session.user = null
            res.redirect(`/home?info='logout success`)
    }

    

}

module.exports = UserController