"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeCommentController = void 0;
const common_1 = require("@nestjs/common");
const noticeComment_service_1 = require("./noticeComment.service");
const guard_1 = require("../auth/guard");
const dto_1 = require("./dto");
const decorator_1 = require("../auth/decorator");
const constants_1 = require("../constants");
let NoticeCommentController = class NoticeCommentController {
    constructor(noticeCommentService) {
        this.noticeCommentService = noticeCommentService;
    }
    createNoticeComment(noticeComment) {
        return this.noticeCommentService.createNoticeComment(noticeComment);
    }
    getCommentsInNotice(noticeId) {
        return this.noticeCommentService.getCommentsInNotice(noticeId);
    }
    deleteNoticeComment(user, id) {
        this.noticeCommentService.getNoticeComment(id).then(noticeComment => {
            if (user.userID.toString() == noticeComment.userId.toString() ||
                user.userID.toString() == constants_1.adminID.toString()) {
                this.noticeCommentService.deleteNoticeComment(id);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        });
    }
};
exports.NoticeCommentController = NoticeCommentController;
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateNoticeCommentDto]),
    __metadata("design:returntype", void 0)
], NoticeCommentController.prototype, "createNoticeComment", null);
__decorate([
    (0, common_1.Get)(':noticeId'),
    __param(0, (0, common_1.Param)('noticeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NoticeCommentController.prototype, "getCommentsInNotice", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], NoticeCommentController.prototype, "deleteNoticeComment", null);
exports.NoticeCommentController = NoticeCommentController = __decorate([
    (0, common_1.Controller)('notice/comment'),
    __metadata("design:paramtypes", [noticeComment_service_1.NoticeCommentService])
], NoticeCommentController);
//# sourceMappingURL=noticeComment.controller.js.map