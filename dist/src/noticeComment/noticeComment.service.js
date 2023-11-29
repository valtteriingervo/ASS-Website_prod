"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeCommentService = void 0;
const common_1 = require("@nestjs/common");
const vadePlsCode_1 = require("../vadePlsCode");
let NoticeCommentService = class NoticeCommentService {
    createNoticeComment(noticeComment) {
        return (0, vadePlsCode_1.createNoticeComment)(noticeComment);
    }
    getNoticeComment(id) {
        return (0, vadePlsCode_1.getNoticeCommentByID)(id);
    }
    getCommentsInNotice(noticeId) {
        return (0, vadePlsCode_1.getCommentsInNotice)(noticeId);
    }
    deleteNoticeComment(id) {
        (0, vadePlsCode_1.deleteNoticeComment)(id);
    }
};
exports.NoticeCommentService = NoticeCommentService;
exports.NoticeCommentService = NoticeCommentService = __decorate([
    (0, common_1.Injectable)({})
], NoticeCommentService);
//# sourceMappingURL=noticeComment.service.js.map