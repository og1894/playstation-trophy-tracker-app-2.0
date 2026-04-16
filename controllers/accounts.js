'use strict';

import logger from '../utils/logger.js';
import userStore from '../models/user-store.js';
import collectionStore from '../models/collection-store.js';
import { v4 as uuidv4 } from 'uuid';

const accounts = {

  index(request, response) {
    const allCollections = collectionStore.getAllCollections();
    const globalNumCollections = allCollections.length;
    const globalNumGames = allCollections.reduce((total, collection) => total + collection.games.length, 0);
    const globalAverage = globalNumCollections > 0 ? (globalNumGames / globalNumCollections).toFixed(2) : 0;
    const globalNumTrophies = allCollections.reduce((collectionTotal, collection) => {
      return collectionTotal + collection.games.reduce((gameTotal, game) => {
        return gameTotal + parseInt(game.trophies || 0, 10);
      }, 0);
    }, 0);

    const globalStatistics = {
      displayNumCollections: globalNumCollections,
      displayNumGames: globalNumGames,
      displayAverage: globalAverage,
      displayNumTrophies: globalNumTrophies,
    };

    const viewData = {
      title: 'Login or Signup',
      globalStats: globalStatistics,
    };
    response.render('index', viewData);
  },
  
  login(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('login', viewData);
  },
  
  logout(request, response) {
    response.cookie('collection', '');
    response.redirect('/');
  },
  
  signup(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('signup', viewData);
  },
  
  register(request, response) {
    const user = request.body;
    user.id = uuidv4();
    userStore.addUser(user);
    logger.info('registering' + user.email);
    response.redirect('/');
  },
  
  authenticate(request, response) {
    const user = userStore.getUserByEmail(request.body.email);
    if (user) {
      response.cookie('collection', user.email);
      logger.info('logging in' + user.email);
      response.redirect('/start');
    } else {
      response.redirect('/login');
    }
  },
  
  getCurrentUser (request) {
    const userEmail = request.cookies.collection;
    return userStore.getUserByEmail(userEmail);
  }
}

export default accounts;