/* 
File: controllers/about.js
Description: Controller for the About page of the PlayStation Trophy Tracker App.
*/

'use strict';

import logger from "../utils/logger.js";        // Importing the logger utility for logging information and debugging purposes.
import aboutStore from "../models/about-store.js";   // Importing the aboutStore model to access the information for the About page.

const about = {        // Defining the about controller object that will contain methods related to the About page.
  createView(request, response) {
    logger.info("About page loading!");
    
    const viewData = {
      title: "About The PlayStation Trophy Tracker App",
      aboutInfo: aboutStore.getAboutInfo()
    };
    
    logger.info(viewData.aboutInfo);
    response.render('about', viewData);
  },
};

export default about;   // Exporting the about controller to be used in other parts of the application, such as routing.