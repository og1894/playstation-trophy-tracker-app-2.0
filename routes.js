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
import collection from './controllers/collection.js';

router.get('/', start.createView);
router.get('/about', about.createView);
router.get('/collection/:id', collection.createView);

router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;
