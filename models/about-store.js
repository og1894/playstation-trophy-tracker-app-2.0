/*
File: models/about-store.js
Description: Model for the information related to the About page of the PlayStation Trophy Tracker App.
*/

'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const aboutStore = {   // Defining the aboutStore object that will contain methods related to the information for the About page.

  store: new JsonStore('./models/about.json', { aboutPerson: {} }),     
  collection: 'aboutPerson',

  getAboutInfo() {
    return this.store.findAll(this.collection);
  },

};

export default aboutStore;   // Exporting the aboutStore model to be used in other parts of the application, such as controllers.