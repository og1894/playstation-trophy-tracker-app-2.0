/*
File: controllers/gamesPS5.js
Description: Controller for the PS5 Games page of the PlayStation Trophy Tracker App.
*/

'use strict';

import logger from "../utils/logger.js";       // Importing the logger utility for logging information and debugging purposes.
import gamesStore from "../models/gamesPS5-store.js";   // Importing the gamesStore model to access the PS5 games information.

const gamesPS5 = {     // Defining the gamesPS5 controller object that will contain methods related to the PS5 games page.
  createView(request, response) {
    logger.info("PS5 page loading!");
    
    const viewData = {
      title: "PlayStation Trophy Tracker PS5 Games",
      gamesInfo: gamesStore.getGamesInfo()
    };
    
    logger.info(viewData.gamesInfo);
    response.render('collectionsPS5', viewData);
  },
};

export default gamesPS5;  // Exporting the gamesPS5 controller to be used in other parts of the application, such as routing.