/**
 * Created by trungquandev.com's author on 18/02/2020.
 * server.js
 */
const express = require('express')
const app = express()
const initRoutes = require('./routes/web')

// Cho phép lý dữ liệu từ form method POST
app.use(express.urlencoded({extended: true}))

// Khởi tạo các routes cho ứng dụng
initRoutes(app)

// chọn một port mà bạn muốn và sử dụng để chạy ứng dụng tại local
const port = 8017
app.listen(port, () => {
  console.log(`Hello trungquandev.com, I'm running at localhost:${port}/`)
})

// const sendMail = require("utils/mailer")

// let targetEmail = "quanlightning17@gmail.com"
// let subject = "Test send email with nodemailer nodejs"
// let template = `
//     <h2>Bạn nhận được email này vì đã đăng ký tài khoản trên ứng dụng Awesome Chat.</h2>
//     <h3>Vui lòng click vào liên kết bên dưới để xác nhận kích hoạt tài khoản.</h3>
//     <h3><a href="https://trungquandev.com" target="blank">https://trungquandev.com</a></h3>
//     <h4>Nếu tin rằng email này là nhầm lẫn, hãy bỏ qua nó. Trân trọng.</h4>
//   `

// // send email
// console.log("Sending...")

// sendMail(targetEmail, subject, template)
//   .then(success => {
//     console.log("Send email successfuly!")
//   })
//   .catch(async (error) => {
//     console.log("Error when trying send email: " + error)
//   })
