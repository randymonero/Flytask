'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.task.belongsTo(models.User,{
        forignKey:{
          allowNull: false
        }
      })
    }
  }
  task.init({
    user_signup_user_id: DataTypes.STRING,
    task_name: DataTypes.STRING,
    starting_date: DataTypes.STRING,
    ending_date: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'task',
  });
  return task;
};