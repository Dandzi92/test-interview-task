const destinations = require("./destinations");

module.exports = (app) => ({
  destinations: destinations(app),
});
