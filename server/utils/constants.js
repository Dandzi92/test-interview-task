const requestMessages = {
  badRequest: {
    status: 400,
  },
  successfulRequest: {
    status: 200,
    message: "Items retrieved",
  },
  itemCreated: {
    status: 201,
    message: "Item added!",
  },
  itemUpdated: {
    status: 200,
    message: "Item updated!",
  },
  internalServerError: {
    status: 500,
  },
};

module.exports = requestMessages;
