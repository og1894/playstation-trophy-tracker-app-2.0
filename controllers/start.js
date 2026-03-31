'use strict';   

import logger from "../utils/logger.js";   
import appStore from "../models/app-store.js";    
import collectionStore from "../models/collection-store.js"; 

const start = {
  createView(request, response) {
    logger.info("Start page loading!");

    const collections = collectionStore.getAllCollections();
    const numCollections = collections.length;
    const numGames = collections.reduce((total, collection) => total + collection.games.length, 0);
    const average = numCollections > 0 ? numGames / numCollections : 0;
    const numTrophies = collections.reduce((collectionTotal, collection) => {
      return collectionTotal + collection.games.reduce((gameTotal, game) => {
        return gameTotal + parseInt(game.trophies || 0, 10);
      }, 0);
    }, 0);
    
    const statistics = {
      displayNumCollections: numCollections,
      displayNumGames: numGames,
      displayAverage: average.toFixed(2),
      displayNumTrophies: numTrophies,
    };
    
    const viewData = {
      title: "PlayStation Trophy Tracker App",
      info: appStore.getAppInfo(),
      stats: statistics,
    };

    response.render('start', viewData);   
  },
};

export default start;
