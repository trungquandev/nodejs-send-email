/**
 * Created by trungquandev.com's author on 18/02/2020.
 * utils/mailer.js
 */
const nodeMailer = require('nodemailer')

const adminEmail = 'quanlightning2@gmail.com'
const adminPassword = 'Thay thế chỗ này thành mật khẩu của bạn'
const mailHost = 'smtp.gmail.com'
const mailPort = '587'

const sendMail = (to, subject, htmlContent) => {
  const transporter = nodeMailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: false, // use SSL - TLS
    auth: {
      user: adminEmail,
      pass: adminPassword
    }
  })

  const options = {
    from: adminEmail,
    to: to,
    subject: subject,
    html: htmlContent
  }

  return transporter.sendMail(options) // This default return a promise
}

module.exports = sendMail
