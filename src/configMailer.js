const nodeMailer = require("nodemailer");

let adminEmail = "quanlightning2@gmail.com";
let adminPassword = "Thay thế chỗ này thành mật khẩu của bạn";
let mailHost = "smtp.gmail.com";
let mailPort = "587";

let sendMail = (to, subject, htmlContent) => {
  let transporter = nodeMailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: false, // use SSL - TLS
    auth: {
      user: adminEmail,
      pass: adminPassword
    }
  });

  let options = {
    from: adminEmail,
    to: to,
    subject: subject,
    html: htmlContent
  };

  return transporter.sendMail(options); // This default return a promise
};

module.exports = sendMail;
