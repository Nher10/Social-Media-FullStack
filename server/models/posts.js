"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ users, comments }) {
      this.belongsTo(users, { foreignKey: "userId", as: "users" });
      this.hasMany(comments, { foreignKey: "userId", as: "comments" });
    }
  }
  posts.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      desc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "posts",
    }
  );
  return posts;
};
