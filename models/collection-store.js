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

async addGame(id, game, file, response) {
    try {
      if (file) {
        game.picture = await this.store.addToCloudinary(file);
      }
      this.store.addItem(this.collection, id, this.array, game);
      response();
    } catch (error) {
      logger.error("Error processing game:", error);
      response(error);
    }
},

addCollectionItem(newCollection) {
    this.store.addCollection(this.collection, newCollection);
},

async removeGame(id, gameId, response) {
    try {
      const collection = this.getCollection(id);
      const game = collection.games.find(g => g.id === gameId);
      
      if (game && game.picture && game.picture.public_id) {
        await this.store.deleteFromCloudinary(game.picture.public_id);
        logger.info("Game image deleted from Cloudinary");
      }
      
      this.store.removeItem(this.collection, id, this.array, gameId);
      if (response) response();
    } catch (error) {
      logger.error("Error deleting game:", error);
      if (response) response(error);
    }
},

async addCollection(collection, file, response) {
  try {
    collection.picture = await this.store.addToCloudinary(file);
    this.store.addCollection(this.collection, collection);
    response();
  } catch (error) {
    logger.error("Error processing collection:", error);
    response(error);
  }
},

async removeCollection(id, response) {
  const collection = this.getCollection(id);

  if (collection.picture && collection.picture.public_id) {
    try {
      await this.store.deleteFromCloudinary(collection.picture.public_id);
      logger.info("Cloudinary image deleted");
    } catch (err) {
      logger.error("Failed to delete Cloudinary image:", err);
    }
  }

    this.store.removeCollection(this.collection, collection);
    response();
  },

async editGame(id, gameId, updatedGame, file, response) {
    try {
      if (file) {
        updatedGame.picture = await this.store.addToCloudinary(file);
      }
      this.store.editItem(this.collection, id, gameId, this.array, updatedGame);
      response();
    } catch (error) {
      logger.error("Error processing game update:", error);
      response(error);
    }
},

searchCollection(search) {
    return this.store.findBy(
      this.collection,
      (collection => collection.title.toLowerCase().includes(search.toLowerCase())))
},

getUserCollections(userid) {
  return this.store.findBy(this.collection, (collection => collection.userid === userid));
},

searchUserCollections(search, userid) {
  return this.store.findBy(
    this.collection,
    (collection => collection.userid === userid && collection.title.toLowerCase().includes(search.toLowerCase())))
},
};

export default collectionStore;