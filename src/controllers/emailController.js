/**
 * Created by trungquandev.com's author on 18/02/2020.
 * emailController.js
 */
const mailer = require('../utils/mailer')

let sendMail = (req, res) => {
  console.log(req.body)
}

module.exports = {
  sendMail: sendMail
}