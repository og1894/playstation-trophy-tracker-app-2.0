'use strict';

import logger from '../utils/logger.js';
import collectionStore from '../models/collection-store.js';
import { v4 as uuidv4 } from 'uuid';
import accounts from './accounts.js';

const collection = {
  createView(request, response) {
    const collectionId = request.params.id;
    const loggedInUser = accounts.getCurrentUser(request);
    logger.debug('Collection id = ' + collectionId);
    
    const viewData = {
      title: 'Collection',
      singleCollection: collectionStore.getCollection(collectionId),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      picture: loggedInUser.picture,
    };

    response.render('collection', viewData);
  },

  async addGame(request, response) {
    const collectionId = request.params.id;
    const collection = collectionStore.getCollection(collectionId);
    const newGame = {
      id: uuidv4(),
      title: request.body.title,
      platform: request.body.platform,
      trophies: request.body.trophies,
    };

    collectionStore.addGame(collectionId, newGame, request.files?.picture, function() {
      response.redirect('/collection/' + collectionId);
    });
  },

  deleteGame(request, response) {
    const collectionId = request.params.id;
    const gameId = request.params.gameid;
    logger.debug(`Deleting Game ${gameId} from Collection ${collectionId}`);
    collectionStore.removeGame(collectionId, gameId, function() {
      response.redirect('/collection/' + collectionId);
    });
  },

  async updateGame(request, response) {
    const collectionId = request.params.id;
    const gameId = request.params.gameid;
    logger.debug("updating game " + gameId);
    const updatedGame = {
      id: gameId,
      title: request.body.title,
      platform: request.body.platform,
      trophies: request.body.trophies,
    };

    collectionStore.editGame(collectionId, gameId, updatedGame, request.files?.picture, function() {
      response.redirect('/collection/' + collectionId);
    });
  },
};

export default collection;