"use strict";
import logger from "../utils/logger.js";
import collectionStore from "../models/collection-store.js";

const stats = {
  createView(request, response) {
    logger.info("Stats page loading!");
    
    const collections = collectionStore.getAllCollections();
    let numCollections = collections.length;
    let numGames = collections.reduce((total, collection) => total + collection.games.length, 0);
	  let average =  numCollections > 0 ? numGames/numCollections : 0;
    let totalRating = collections.reduce((total, collection) => total + parseInt(collection.rating), 0);
    let avgRating = numCollections > 0 ? totalRating/numCollections : 0;
    let maxRating = Math.max(...collections.map(collection => collection.rating));
    let maxRated = collections.filter(collection => collection.rating === maxRating);
    let favTitles = maxRated.map(item => item.title);

    const statistics = {
      displayNumCollections: numCollections,
      displayNumGames: numGames,
      displayAverage: average.toFixed(2),
      displayAvgRating: avgRating.toFixed(2),
	    highest: maxRating,
      displayFav: favTitles
    }

    const viewData = {
      title: "Trophy Tracker App Statistics",
      stats: statistics
    };
  
    response.render("stats", viewData);
  },
};

export default stats;