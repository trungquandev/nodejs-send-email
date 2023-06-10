/**
 * Created by trungquandev.com's author on 18/02/2020.
 * Contributed by https://github.com/AzouKr
 * server.ts
 */
import express from "express";
const initRoutes = require('./routes/web')
import config from "config";


const app = express();
const port = config.get<number>("port");
app.use(express.json());

// Allow processing data from form method POST
app.use(express.urlencoded({extended: true}))

// Initialize routes for the application
initRoutes(app)

// choose a port you want and use to run the application locally
app.listen(port, async () => {
  console.log(`App is running at http://localhost:${port}`);
  initRoutes(app);

});
