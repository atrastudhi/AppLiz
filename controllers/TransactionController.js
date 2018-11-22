const Model = require("../models")
var nodemailer = require('nodemailer');

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
            user: 'youremail@gmail.com',
            pass: 'yourpassword'
          }
        });
  
        var mailOptions = {
          from: 'youremail@gmail.com',
          to: `${email}`,
          subject: 'License code',
          text: 'thanks!'
        };
  
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            // console.log(error);
            res.redirect('/item?info=wrongemail')
          } else {
            // console.log('Email sent: ' + info.response);
            res.render("pages/sendEmail.ejs",{email})
          }
          });

        
    }
}

module.exports = TransactionController