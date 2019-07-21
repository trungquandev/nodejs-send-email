const sendMail = require("./configMailer");

let targetEmail = "quanlightning17@gmail.com";
let subject = "Test send email with nodemailer nodejs";
let template = `
    <h2>Bạn nhận được email này vì đã đăng ký tài khoản trên ứng dụng Awesome Chat.</h2>
    <h3>Vui lòng click vào liên kết bên dưới để xác nhận kích hoạt tài khoản.</h3>
    <h3><a href="https://trungquandev.com" target="blank">https://trungquandev.com</a></h3>
    <h4>Nếu tin rằng email này là nhầm lẫn, hãy bỏ qua nó. Trân trọng.</h4>
  `;

// send email
console.log("Sending...");

sendMail(targetEmail, subject, template)
  .then(success => {
    console.log("Send email successfuly!");
  })
  .catch(async (error) => {
    console.log("Error when trying send email: " + error);
  });
