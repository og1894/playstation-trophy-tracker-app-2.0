'use strict';

import logger from "../utils/logger.js"; 
import aboutStore from "../models/about-store.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");
    
    const viewData = {
      title: "About the PlayStation Game Tracker App",
      aboutInfo: aboutStore.getAboutInfo()
    };
    
    logger.info(viewData.aboutInfo);
    response.render('about', viewData);
  },
};

export default about;