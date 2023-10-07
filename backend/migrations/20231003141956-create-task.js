'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_signup_user_id: {
        allowNull:false,
        type: Sequelize.STRING,
        references:{
          model:'user_sign_up',
          key:'user_id'
        }
      },
      task_name: {
        allowNull:false,
        type: Sequelize.STRING
      },
      starting_date: {
        allowNull:false,
        type: Sequelize.STRING
      },
      ending_date: {
        allowNull:false,
        type: Sequelize.STRING
      },
      status: {
        allowNull:false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};