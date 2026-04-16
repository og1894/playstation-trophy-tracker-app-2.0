'use strict';

import logger from "../utils/logger.js"; 
import aboutStore from "../models/about-store.js";
import collectionStore from "../models/collection-store.js";
import accounts from './accounts.js';

const about = {
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info("About page loading!");
    
    if (loggedInUser) {

      const allCollections = collectionStore.getAllCollections();
      const globalNumCollections = allCollections.length;
      const globalNumGames = allCollections.reduce((total, collection) => total + collection.games.length, 0);
      const globalAverage = globalNumCollections > 0 ? (globalNumGames / globalNumCollections).toFixed(2) : 0;
      const globalNumTrophies = allCollections.reduce((collectionTotal, collection) => {
        return collectionTotal + collection.games.reduce((gameTotal, game) => {
          return gameTotal + parseInt(game.trophies || 0, 10);
        }, 0);
      }, 0);

      const globalStatistics = {
        displayNumCollections: globalNumCollections,
        displayNumGames: globalNumGames,
        displayAverage: globalAverage,
        displayNumTrophies: globalNumTrophies,
      };

      const viewData = {
        title: 'About the Playlist App',
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        aboutInfo: aboutStore.getAboutInfo(),
        globalStats: globalStatistics,
      };
      response.render('about', viewData);
    }
    else response.redirect('/');
  },
};

export default about;

