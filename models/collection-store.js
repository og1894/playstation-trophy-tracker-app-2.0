'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const collectionStore = {

  store: new JsonStore('./models/collection.json', { gamesCollection: [] }),
  collection: 'gamesCollection',
  array: 'games',

  getAllCollections() {
    return this.store.findAll(this.collection);
  },

  getCollection(id) {
    return this.store.findOneBy(this.collection, (collection => collection.id === id));
},

addGame(id, game) {
    this.store.addItem(this.collection, id, this.array, game);
},

addCollection(collection) {
    this.store.addCollection(this.collection, collection);
},

removeGame(id, gameId) {
    this.store.removeItem(this.collection, id, this.array, gameId);
},

removeCollection(id) {
    const collection = this.getCollection(id);
    this.store.removeCollection(this.collection, collection);
},

editGame(id, gameId, updatedGame) {
    this.store.editItem(this.collection, id, gameId, this.array, updatedGame);
},

searchCollection(search) {
    return this.store.findBy(
      this.collection,
      (collection => collection.title.toLowerCase().includes(search.toLowerCase())))
},
};

export default collectionStore;