"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vadePlsCode_1 = require("../../src/vadePlsCode");
const testNotice = {
    title: 'Muscles',
    text: 'More muscles, testing same title names :)',
    userId: 3,
};
const testNoticeCrossFitGal = {
    title: 'Does anyone here do crossfit',
    text: 'It is my preferred lifting form, but does everyone here just powerlift?',
    userId: 3,
};
const testNoticeWraps = {
    title: 'Looking for new lifting wraps',
    text: 'Preferrably under 20 euros and comfy',
    userId: 3,
};
const testNoticeCurl = {
    title: 'What curl variation for bicep peaks?',
    text: 'See title. What would be the best curl variation for that',
    userId: 1,
};
const testNoticeFood = {
    title: 'Any bulking recipe tips?',
    text: 'Month 2 atm and need some new ones',
    userId: 2,
};
async function testNoticeCreation() {
    await (0, vadePlsCode_1.createNotice)(testNotice);
}
async function testGetAllNotices() {
    await (0, vadePlsCode_1.getAllNotices)();
}
async function testGetNoticeById() {
    await (0, vadePlsCode_1.getNoticeByID)(1);
    await (0, vadePlsCode_1.getNoticeByID)(2);
    await (0, vadePlsCode_1.getNoticeByID)(200);
}
async function testGetCommentsInNotice() {
    await (0, vadePlsCode_1.getCommentsInNotice)(200);
}
async function testUpdateNotice() {
    const updateThisNotice = {
        id: 23,
        text: 'Cool text',
        picture: 'www.imgur.com/barefoot.png',
    };
    await (0, vadePlsCode_1.updateNotice)(updateThisNotice);
}
async function testDeleteNotice() {
    await (0, vadePlsCode_1.deleteNotice)(1);
}
testUpdateNotice();
//# sourceMappingURL=Notice_useVadePlsCodeFunctions.js.map