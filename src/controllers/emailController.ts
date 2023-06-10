/**
 * Created by trungquandev.com's author on 18/02/2020.
 * Contributed by https://github.com/AzouKr
 * emailController.ts
 */
import { Request, Response } from "express";
const mailer = require('../utils/mailer')
import { EmailSchema } from "../schema/emailSchema";


const sendMailController = async (  req: Request<{}, {}, EmailSchema["body"]>, res: Response) => {
  try {

    const {to, subject, body} = req.body;
    // Make email delivery
    await mailer.sendMail(to,subject,body)

    // If the email is sent successfully, a success message will be sent to the user
    res.send('<h3>Your email has been sent successfully.</h3>')
  } catch (error: any) {
    // If there is an error, log it out to check and also send it to the client
    console.log(error);
    return res.status(400).send(error.message);
  }
}

module.exports = {
  sendMailController: sendMailController
}