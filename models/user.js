"use strict"
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "users",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            first_name: {
                type: DataTypes.STRING
            },
            last_name: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
        },
        {timestamps: false}
    );
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
}