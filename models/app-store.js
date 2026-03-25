/*
File: models/app-store.js
Description: Model for the information related to the application, such as the creators of the PlayStation Trophy Tracker App.
*/

'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const appStore = {      // Defining the appStore object that will contain methods related to the general information about the PlayStation Trophy Tracker App.

  store: new JsonStore('./models/app-store.json', { info: {} }),
  collection: 'info',
  array: 'creators',

  getAppInfo() {
    return this.store.findAll(this.collection);
  },

};

export default appStore;  // Exporting the appStore model to be used in other parts of the application, such as controllers.