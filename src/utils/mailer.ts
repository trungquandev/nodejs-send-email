/**
 * Created by trungquandev.com's author on 18/02/2020.
 * utils/mailer.ts
 */
const nodeMailer = require('nodemailer')

// The information below you can throw it into the env environment variable.
// Because for the demo, I leave the const variables here.
const adminEmail : string = 'azouwork@gmail.com'
const adminPassword : string = 'mtlcbibfpkkvzasr'
// I use google host - gmail
const mailHost : string = 'smtp.gmail.com'
// 587 is a standard and common port in the SMTP protocol
const mailPort : number = 587

const sendMail = (to: string, subject: string, body: string) => {
  // Initialize a transporter object using standard SMTP transport protocol with the above configuration information.
  const transporter = nodeMailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: false, // if you use port 465 (smtps), leave it true, leave false for all other ports
    auth: {
      user: adminEmail,
      pass: adminPassword
    }
  })

  const options = {
    from: adminEmail, // admin email address you use to send
    to: to, // address sent to
    subject: subject, // The subject of the email
    html: body // The body of the email I will use html instead of plain text.
  }

  // this transporter.sendMail() function will return us a Promise
  return transporter.sendMail(options)
}

module.exports = {
  sendMail: sendMail
}
