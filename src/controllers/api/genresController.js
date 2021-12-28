const db = require("../../database/models");
const sequelize = db.sequelize;

module.exports = {
  list: (req, res) => {
    db.Genre.findAll().then((genres) => {
      const response = {
        meta: {
          status: 200,
          total: genres.length,
          url: `${req.protocol}://${req.get("host")}${req.originalUrl}`,
        },
        data: genres,
      };
      res.json(response);
    });
  },
  detail: (req, res) => {
    db.Genre.findByPk(req.params.id).then((genre) => {
      const response = {
        meta: {
          status: 200,
          url: `${req.protocol}://${req.get("host")}${req.originalUrl}`,
        },
        data: genre,
      };
      res.json(response);
    });
  },
};