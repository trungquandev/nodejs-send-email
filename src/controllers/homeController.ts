/**
 * Created by trungquandev.com's author on 18/02/2020.
 * Contributed by https://github.com/AzouKr
 * homeController.ts
 */
import { Request, Response } from "express";
const path = require('path')

let getHome = (req: Request, res: Response) => {
  return res.sendFile(path.join(`${__dirname}/../views/master.html`))
}

module.exports = {
  getHome: getHome
}
