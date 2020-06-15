const express = require("express");

module.exports = (app, controllers) => {
  const router = express.Router();
  router.route("/").get(controllers.destinations.getDestinations);
  router.route("/").post(controllers.destinations.addDestination);
  return router;
};
