/**
 * Created by trungquandev.com's author on 18/02/2020.
 * routes/web.js
 */
import { Express, Request, Response } from "express";
const homeController = require('../controllers/homeController')
const emailController = require('../controllers/emailController')
import validateResource from "../middleware/validateResource";
import { emailSchema } from "../schema/emailSchema";


let initRoutes = (app: Express) => {
  // Call out the home page for uploads
  app.get('/', homeController.getHome)
  
  // Call to action send email
  app.post('/send-email', validateResource(emailSchema), emailController.sendMailController)

};

module.exports = initRoutes
