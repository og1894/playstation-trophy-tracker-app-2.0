'use strict';

import express from 'express';
import logger from "./utils/logger.js";

const router = express.Router();

import start from './controllers/start.js';
import about from './controllers/about.js';
import dashboard from './controllers/dashboard.js';
import collection from './controllers/collection.js';
import accounts from './controllers/accounts.js';

router.get('/start', start.createView);
router.get('/about', about.createView);
router.get('/dashboard', dashboard.createView);
router.get('/collection/:id', collection.createView);

router.post('/collection/:id/addgame', collection.addGame);
router.post('/dashboard/addcollection', dashboard.addCollection);
router.get('/collection/:id/deletegame/:gameid', collection.deleteGame);
router.get('/dashboard/deletecollection/:id', dashboard.deleteCollection);
router.post('/collection/:id/updategame/:gameid', collection.updateGame);
router.get('/searchCategory', dashboard.createView);
router.get('/sortData', dashboard.createView);

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;
