const Model = require("../models")
var nodemailer = require('nodemailer');

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
                // console.log(data)
                return Model.Item.findOne({where:{id: itemId}})

            })
            .then(data2=>{
                // res.send(data2)
                res.render("pages/billingPage.ejs",{data:data2})
            })
            .catch(err=>{
                res.redirect(`/item?info=${err}`)
            })
    }

    static success(req,res){
        let email = req.session.user.email

        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'gamecowo12345@gmail.com',
            pass: 'gamecowo54321'
          }
        });
  
        var mailOptions = {
          from: 'gamecowo12345@gmail.com',
          to: `${email}`,
          subject: 'License code',
          text: 'thanks!'
        };
  
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            // console.log(error);
            res.redirect(`/item?info=${error}`)
          } else {
            console.log('Email sent: ' + info.response);
            res.render("pages/sendEmail.ejs",{email})
          }
          });
    }

    static showTransaction(req,res){
        Model.Transaction.findAll()
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