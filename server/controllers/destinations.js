const Util = require("../utils/Utils");
const database = require("../src/models/index");
const requestMessages = require("../utils/constants");

const util = new Util();

module.exports = () => {
  const addDestination = async (req, res) => {
    const { destination, link, textarea } = req.body;
    const destinationToSave = {
      description: textarea,
      link,
      destination,
    };
    try {
      const createdDestination = await database.Destination.create(
        destinationToSave
      );
      util.setSuccess(
        requestMessages.successfulRequest.status,
        "destination is added",
        createdDestination
      );
      return util.send(res);
    } catch (error) {
      console.log("error", error);
      util.setError(requestMessages.internalServerError.status, error);
      return util.send(res);
    }
  };
  const getDestinations = async (req, res) => {
    try {
      database;
      const destinations = await database.Destination.findAll();
      util.setSuccess(
        requestMessages.successfulRequest.status,
        "OK",
        destinations
      );
      return util.send(res);
    } catch (error) {
      util.setError(requestMessages.internalServerError.status, error);
      return util.send(res);
    }
  };

  return {
    addDestination,
    getDestinations,
  };
};
