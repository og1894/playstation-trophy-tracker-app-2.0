/* 
File: controllers/gamesPS3.js
Description: Controller for the PS3 Games page of the PlayStation Trophy Tracker App.
*/

'use strict';

import logger from "../utils/logger.js";        // Importing the logger utility for logging information and debugging purposes.                  
import gamesStore from "../models/gamesPS3-store.js";      // Importing the gamesStore model to access the PS3 games information.

const gamesPS3 = {             // Defining the gamesPS3 controller object that will contain methods related to the PS3 games page.
  createView(request, response) {
    logger.info("PS3 page loading!");
    
    const viewData = {
      title: "PlayStation Trophy Tracker PS3 Games",
      gamesInfo: gamesStore.getGamesInfo()
    };
    
    logger.info(viewData.gamesInfo);
    response.render('collectionsPS3', viewData);
  },
};

export default gamesPS3;      // Exporting the gamesPS3 controller to be used in other parts of the application, such as routing.