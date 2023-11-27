"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: async ({ context: queryInterface }) => {
        await queryInterface.createTable('users', {
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
            profile_picture: {
                type: sequelize_1.DataTypes.STRING,
            },
            type_of_lifting: {
                type: sequelize_1.DataTypes.STRING,
            },
            favourite_lift: {
                type: sequelize_1.DataTypes.STRING,
            },
            favourite_gym: {
                type: sequelize_1.DataTypes.STRING,
            },
            favourite_gym_time: {
                type: sequelize_1.DataTypes.STRING,
            },
            contact_info: {
                type: sequelize_1.DataTypes.STRING,
            },
        });
        await queryInterface.createTable('notices', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            text: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false,
            },
            picture: {
                type: sequelize_1.DataTypes.TEXT,
            },
            created_at: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE,
                defaultValue: sequelize_1.Sequelize.fn('NOW'),
            },
        });
        await queryInterface.addColumn('notices', 'user_id', {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'users', key: 'id' },
        });
    },
    down: async ({ context: queryInterface }) => {
        await queryInterface.dropTable('notes');
        await queryInterface.dropTable('users');
    },
};
//# sourceMappingURL=30_10_2023_01_initialize_users_and_notices.js.map