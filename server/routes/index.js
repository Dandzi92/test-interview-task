const express = require("express");
const cloneDeep = require("clone-deep");
const destinations = require("./destinations");
const allControllers = require("../controllers/index");

module.exports = (app) => {
  const router = express.Router();
  const controllers = allControllers(app);
  router.use("/api/destinations", destinations(app, controllers));

  router.use((err, req, res, next) => {
    if (err.name === "ValidationError") {
      return res.status(422).json({
        errors: Object.keys(err.errors).reduce((errors, key) => {
          const clonedError = cloneDeep(errors);
          clonedError[key] = err.errors[key].message;
          return clonedError;
        }, {}),
      });
    }

    return next(err);
  });

  return router;
};
