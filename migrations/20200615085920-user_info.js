'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      first_name: {
        type: Sequelize.DataTypes.STRING
      },
      last_name: {
        type: Sequelize.DataTypes.STRING
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
