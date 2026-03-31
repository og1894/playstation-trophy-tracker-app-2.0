'use strict';

import logger from "../utils/logger.js";
import { v4 as uuidv4 } from 'uuid';
import collectionStore from "../models/collection-store.js";

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!");

    const searchTerm = request.query.searchTerm || "";

    const collections = searchTerm
      ? collectionStore.searchCollection(searchTerm)
      : collectionStore.getAllCollections();

    const sortField = request.query.sort;
    const order = request.query.order === "desc" ? -1 : 1;

    let sorted = collections;

    if (sortField) {
      sorted = collections.slice().sort((a, b) => {
        if (sortField === "title") {
          return a.title.localeCompare(b.title) * order;
        }

        if (sortField === "rating") {
          return (a.rating - b.rating) * order;
        }

        return 0;
      });
    }

    const viewData = {
      title: "Trophy Tracker App Dashboard",
      collections: sortField ? sorted : collections,
      search: searchTerm,
      titleSelected: request.query.sort === "title",
      ratingSelected: request.query.sort === "rating",
      ascSelected: request.query.order === "asc",
      descSelected: request.query.order === "desc",
    };

    logger.debug(viewData.collections);

    response.render("dashboard", viewData);
  },

  addCollection(request, response) {
    const timestamp = new Date();
    
    const newCollection = {
      id: uuidv4(),
      title: request.body.title,
	    date: timestamp,
      games: []
    };
    
    collectionStore.addCollection(newCollection);
    response.redirect('/dashboard');
  },

  deleteCollection(request, response) {
    const collectionId = request.params.id;
    logger.debug(`Deleting Collection ${collectionId}`);
    collectionStore.removeCollection(collectionId);
    response.redirect("/dashboard");
  },
};

export default dashboard;