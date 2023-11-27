"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../util/db");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    profilePicture: {
        type: sequelize_1.DataTypes.STRING,
    },
    typeOfLifting: {
        type: sequelize_1.DataTypes.STRING,
    },
    favouriteLift: {
        type: sequelize_1.DataTypes.STRING,
    },
    favouriteGym: {
        type: sequelize_1.DataTypes.STRING,
    },
    favouriteGymTime: {
        type: sequelize_1.DataTypes.STRING,
    },
    contactInfo: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: db_1.sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'user',
});
//# sourceMappingURL=user.js.map