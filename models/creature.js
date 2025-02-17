'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class creature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  creature.init({
    img_url: DataTypes.TEXT,
    type: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'creature',
  });
  return creature;
};