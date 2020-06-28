'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('blog_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      blog_name: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
      },  
      description: {
        type: Sequelize.DataTypes.STRING
      },
      content: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      user_id:{
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'users', key: 'id' }
      }

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('blog_data');
  }
};
