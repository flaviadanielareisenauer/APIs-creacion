// const { TINYINT, INTEGER } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {
  let alias = "Genre";
  let cols = {
    id: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    ranking: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      allowNull: false,
    },
    active: {
      type: dataTypes.BOOLEAN,
      allowNull: false,
    },
  };
  let config = {
    tableName: "genres",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const Genre = sequelize.define(alias, cols, config);

  Genre.associate = function (models) {
    Genre.hasMany(models.Movie, {
      as: "movies",
      foreignKey: "genre_id",
    });
  };

  return Genre;
};