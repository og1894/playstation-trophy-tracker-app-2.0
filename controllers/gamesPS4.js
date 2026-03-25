/* 
File: controllers/gamesPS4.js
Description: Controller for the PS4 Games page of the PlayStation Trophy Tracker App.
*/

'use strict';

import logger from "../utils/logger.js";      // Importing the logger utility for logging information and debugging purposes.
import gamesStore from "../models/gamesPS4-store.js";    // Importing the gamesStore model to access the PS4 games information.

const gamesPS4 = {        // Defining the gamesPS4 controller object that will contain methods related to the PS4 games page.
  createView(request, response) {
    logger.info("PS4 page loading!");   
    
    const viewData = {    
      title: "PlayStation Trophy Tracker PS4 Games",
      gamesInfo: gamesStore.getGamesInfo()
    };
    
    logger.info(viewData.gamesInfo);
    response.render('collectionsPS4', viewData);
  },
};

export default gamesPS4;   // Exporting the gamesPS4 controller to be used in other parts of the application, such as routing.