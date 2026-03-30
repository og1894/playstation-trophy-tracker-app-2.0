'use strict';

import logger from '../utils/logger.js';
import collectionStore from '../models/collection-store.js';

const collection = {
  createView(request, response) {
    const collectionId = request.params.id;
    logger.debug(`Collection id = ${collectionId}`);
    
    const viewData = {
      title: 'Collections',
      gamesInfo: collectionStore.getAllCollections()
    };
    response.render('collection', viewData);
  },
};

export default collection;