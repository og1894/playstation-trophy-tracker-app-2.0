/*
File: models/consoles-store.js
Description: Model for the information related to the different PlayStation consoles, such as the PS4 and PS5, which will be displayed on the Start page of the PlayStation Trophy Tracker App.
*/

'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const consoleStore = {           // Defining the consoleStore object that will contain methods related to the information about the different PlayStation consoles.

  store: new JsonStore('./models/consoles.json', { console: {} }),
  collection: 'console',


  getConsolesInfo() {
    return this.store.findAll(this.collection);
  },

};

export default consoleStore;       // Exporting the consoleStore model to be used in other parts of the application, such as controllers.