"use strict"
module.exports = (sequelize, DataTypes) => {
    const User_blog = sequelize.define(
        "blog_data",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            blog_name: {
                type: DataTypes.STRING,
                unique: true,
            },
            description: {
                type: DataTypes.STRING
            },
            content: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                references: { model: 'users', key: 'id' }
            }
        },
        { timestamps: false },
    );
    User_blog.associate = function (models) {
        // associations can be defined here
    };
    return User_blog;
}