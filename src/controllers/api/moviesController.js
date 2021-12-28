const db = require("../../database/models");
const sequelize = db.sequelize;

module.exports = {
  list: (req, res) => {
    db.Movie.findAll().then((movies) => {
      const response = {
        meta: {
          status: 200,
          total: movies.length,
          url: `${req.protocol}://${req.get("host")}${req.originalUrl}`,
        },
        data: movies,
      };
      res.json(response);
    });
  },
  detail: (req, res) => {
    db.Movie.findByPk(req.params.id).then((movie) => {
      const response = {
        meta: {
          status: 200,
          url: `${req.protocol}://${req.get("host")}${req.originalUrl}`,
        },
        data: movie,
      };
      res.json(response);
    });
  },
};