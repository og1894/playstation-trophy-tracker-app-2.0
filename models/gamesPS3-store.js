/*
File: models/gamesPS3-store.js
Description: Model for the information related to the different PlayStation 3 games, which will be displayed on the Start page of the PlayStation Trophy Tracker App.
*/

'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const gameStore = {      // Defining the gameStore object that will contain methods related to the information about the different PlayStation 3 games.

  store: new JsonStore('./models/gamesPS3.json', { games3: {} }),
  collection: 'games3',


  getGamesInfo() {
    return this.store.findAll(this.collection);
  },

};

export default gameStore;     // Exporting the gameStore model to be used in other parts of the application, such as controllers.