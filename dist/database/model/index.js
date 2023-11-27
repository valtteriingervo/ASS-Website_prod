"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeComment = exports.Notice = exports.User = void 0;
const user_1 = require("./user");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_1.User; } });
const notice_1 = require("./notice");
Object.defineProperty(exports, "Notice", { enumerable: true, get: function () { return notice_1.Notice; } });
const noticeComment_1 = require("./noticeComment");
Object.defineProperty(exports, "NoticeComment", { enumerable: true, get: function () { return noticeComment_1.NoticeComment; } });
user_1.User.hasMany(notice_1.Notice, {
    onDelete: 'CASCADE',
    hooks: true,
});
notice_1.Notice.belongsTo(user_1.User);
user_1.User.hasMany(noticeComment_1.NoticeComment, {
    onDelete: 'CASCADE',
    hooks: true,
});
noticeComment_1.NoticeComment.belongsTo(user_1.User);
notice_1.Notice.hasMany(noticeComment_1.NoticeComment, {
    onDelete: 'CASCADE',
    hooks: true,
});
noticeComment_1.NoticeComment.belongsTo(notice_1.Notice);
user_1.User.sync();
notice_1.Notice.sync();
noticeComment_1.NoticeComment.sync();
//# sourceMappingURL=index.js.map