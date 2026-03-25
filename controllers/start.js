/*
File: controllers/start.js
Description: Controller for the Start page of the PlayStation Trophy Tracker App.
*/

'use strict';   

import logger from "../utils/logger.js";    // Importing the logger utility for logging information and debugging purposes.
import appStore from "../models/app-store.js";    // Importing the appStore model to access the general information about the PlayStation Trophy Tracker App.
import consoleStore from "../models/consoles-store.js";   // Importing the consoleStore model to access the information about the different PlayStation consoles.

const start = {     // Defining the start controller object that will contain methods related to the Start page.
  createView(request, response) {
    logger.info("Start page loading!");
    
    const viewData = {
      title: "PlayStation Trophy Tracker App",
      info: appStore.getAppInfo(),
      consoles: consoleStore.getConsolesInfo()
    };
    logger.info(viewData.consoles);
    response.render('start', viewData);   
  },
};

export default start;       // Exporting the start controller to be used in other parts of the application, such as routing.
