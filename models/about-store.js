'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const aboutStore = {

  store: new JsonStore('./models/about.json', { aboutPerson: {} }),     
  collection: 'aboutPerson',

  getAboutInfo() {
    return this.store.findAll(this.collection);
  },

};

export default aboutStore;