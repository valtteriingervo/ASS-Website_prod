"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeComment = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../util/db");
class NoticeComment extends sequelize_1.Model {
}
exports.NoticeComment = NoticeComment;
NoticeComment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    text: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
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
    noticeId: {
        allowNull: false,
        type: sequelize_1.DataTypes.NUMBER,
    },
}, {
    sequelize: db_1.sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'noticeComment',
});
//# sourceMappingURL=noticeComment.js.map