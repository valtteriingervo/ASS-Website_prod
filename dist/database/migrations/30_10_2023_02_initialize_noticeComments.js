"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: async ({ context: queryInterface }) => {
        await queryInterface.createTable('notice_comments', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            text: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false,
            },
            created_at: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE,
                defaultValue: sequelize_1.Sequelize.fn('NOW'),
            },
        });
        await queryInterface.addColumn('notice_comments', 'user_id', {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'users', key: 'id' },
        });
        await queryInterface.addColumn('notice_comments', 'notice_id', {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'notices', key: 'id' },
        });
    },
    down: async ({ context: queryInterface }) => {
        await queryInterface.dropTable('note_comments');
    },
};
//# sourceMappingURL=30_10_2023_02_initialize_noticeComments.js.map