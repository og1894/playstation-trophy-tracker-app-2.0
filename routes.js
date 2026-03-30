/*
File: routes.js
Description: This file defines the routes for the PlayStation Trophy Tracker App, mapping URL paths to their corresponding controller functions that will handle the requests and generate the appropriate views for the user.
*/

'use strict';

import express from 'express';
import logger from "./utils/logger.js";

const router = express.Router();

import start from './controllers/start.js';
import about from './controllers/about.js';
import dashboard from './controllers/dashboard.js';
import collection from './controllers/collection.js';
import stats from './controllers/stats.js';

router.get('/', start.createView);
router.get('/about', about.createView);
router.get('/dashboard', dashboard.createView);
router.get('/collection/:id', collection.createView);

router.post('/collection/:id/addgame', collection.addGame);
router.post('/dashboard/addcollection', dashboard.addCollection);
router.get('/collection/:id/deletegame/:gameid', collection.deleteGame);
router.get('/dashboard/deletecollection/:id', dashboard.deleteCollection);
router.post('/collection/:id/updategame/:gameid', collection.updateGame);
router.get('/stats', stats.createView);
router.get('/searchCategory', dashboard.createView);
router.get('/sortData', dashboard.createView);

router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;
