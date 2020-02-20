/**
 * Created by trungquandev.com's author on 18/02/2020.
 * routes/web.js
 */
const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
const emailController = require('../controllers/emailController')

let initRoutes = (app) => {
  // Gọi ra trang home cho việc upload
  router.get('/', homeController.getHome)
  
  // Gọi hành động gửi email
  router.post('/send-email', emailController.sendMail)

  return app.use('/', router)
};

module.exports = initRoutes
