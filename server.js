/*
File: server.js
Description: This is the main entry point of the PlayStation Trophy Tracker App. It sets up the Express server, configures middleware for serving static files and using Handlebars as the view engine, and defines the routes for the application by importing them from the routes.js file. Finally, it starts the server and listens on a specified port for incoming requests.
*/

'use strict';

import express from 'express';
import routes from "./routes.js";
import logger from "./utils/logger.js";
import { create } from 'express-handlebars';

const app = express();
const port = 3000;

app.use(express.static("public"));

const handlebars = create({extname: '.hbs'});
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use("/", routes);

app.listen(port, () => logger.info(`Your app is listening on port ${port}`));
