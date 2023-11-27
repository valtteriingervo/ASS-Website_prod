"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vadePlsCode_1 = require("../../src/vadePlsCode");
const testNoticeComment = {
    text: 'I also like carrots',
    userId: 1,
    noticeId: 2,
};
const testNoticeCommentLift = {
    text: 'Romanian deadlifts have to be mine',
    userId: 2,
    noticeId: 1,
};
const testNoticeCommentLift2 = {
    text: 'Kipping pull ups are the best!',
    userId: 3,
    noticeId: 1,
};
async function testNoticeCommentCreation() {
    await (0, vadePlsCode_1.createNoticeComment)(testNoticeComment);
}
async function testGetAllNoticeComments() {
    await (0, vadePlsCode_1.getAllNoticeComments)();
}
async function testGetNoticeCommentByID() {
    await (0, vadePlsCode_1.getNoticeCommentByID)(3);
    await (0, vadePlsCode_1.getNoticeCommentByID)(4);
    await (0, vadePlsCode_1.getNoticeCommentByID)(200);
}
async function testDeleteNoticeComment() {
    await (0, vadePlsCode_1.deleteNoticeComment)(300);
}
testNoticeCommentCreation();
//# sourceMappingURL=NoticeComment_useVadePlsCodeFunctions.js.map