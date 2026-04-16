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
      const collections = collectionStore.getAllCollections();
      const numCollections = collections.length;
      const numGames = collections.reduce((total, collection) => total + collection.games.length, 0);
      const average = numCollections > 0 ? (numGames / numCollections).toFixed(2) : 0;
      const numTrophies = collections.reduce((collectionTotal, collection) => {
        return collectionTotal + collection.games.reduce((gameTotal, game) => {
          return gameTotal + parseInt(game.trophies || 0, 10);
        }, 0);
      }, 0);
    
      const statistics = {
        displayNumCollections: numCollections,
        displayNumGames: numGames,
        displayAverage: average,
        displayNumTrophies: numTrophies,
      };
    
    
      const viewData = {
        title: "PlayStation Game Tracker App",
        info: appStore.getAppInfo(),
        stats: statistics,
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      };
      response.render('start', viewData);
    }
    else response.redirect('/');   
  },
};

export default start;