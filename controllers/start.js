'use strict';   

import logger from "../utils/logger.js";   
import appStore from "../models/app-store.js";    
import collectionStore from "../models/collection-store.js"; 
import accounts from './accounts.js';

const start = {
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info("Start page loading!");

    if (loggedInUser) {

      const userCollections = collectionStore.getUserCollections(loggedInUser.id);
      const userNumCollections = userCollections.length;
      const userNumGames = userCollections.reduce((total, collection) => total + collection.games.length, 0);
      const userAverage = userNumCollections > 0 ? (userNumGames / userNumCollections).toFixed(2) : 0;
      const userNumTrophies = userCollections.reduce((collectionTotal, collection) => {
        return collectionTotal + collection.games.reduce((gameTotal, game) => {
          return gameTotal + parseInt(game.trophies || 0, 10);
        }, 0);
      }, 0);

      const userStatistics = {
        displayNumCollections: userNumCollections,
        displayNumGames: userNumGames,
        displayAverage: userAverage,
        displayNumTrophies: userNumTrophies,
      };
      
      const viewData = {
        title: "PlayStation Game Tracker App",
        info: appStore.getAppInfo(),
        userStats: userStatistics,
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      };
      response.render('start', viewData);
    }
    else response.redirect('/');   
  },
};

export default start;