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
import gamesPS3 from './controllers/gamesPS3.js';
import gamesPS4 from './controllers/gamesPS4.js';
import gamesPS5 from './controllers/gamesPS5.js';

router.get('/', start.createView);
router.get('/about', about.createView);
router.get('/collectionsPS3', gamesPS3.createView);
router.get('/collectionsPS4', gamesPS4.createView);
router.get('/collectionsPS5', gamesPS5.createView);
router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;
