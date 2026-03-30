import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const collectionStore = {

  store: new JsonStore('./models/collection.json', { gamesCollection: [] }),
  collection: 'gamesCollection',
  array: 'games',

  getAllCollections() {
    return this.store.findAll(this.collection);
  },

};

export default collectionStore;