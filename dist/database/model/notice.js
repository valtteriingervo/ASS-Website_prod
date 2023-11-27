"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notice = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../util/db");
class Notice extends sequelize_1.Model {
}
exports.Notice = Notice;
Notice.init({
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
    createdAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.Sequelize.fn('NOW'),
    },
    userId: {
        allowNull: false,
        type: sequelize_1.DataTypes.NUMBER,
    },
}, {
    sequelize: db_1.sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'notice',
});
//# sourceMappingURL=notice.js.map