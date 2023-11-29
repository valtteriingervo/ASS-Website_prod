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
exports.NoticeController = void 0;
const common_1 = require("@nestjs/common");
const notice_service_1 = require("./notice.service");
const guard_1 = require("../auth/guard");
const dto_1 = require("./dto");
const constants_1 = require("../constants");
const decorator_1 = require("../auth/decorator");
const vadePlsCode_1 = require("../vadePlsCode");
let NoticeController = class NoticeController {
    constructor(noticeService) {
        this.noticeService = noticeService;
    }
    createNotice(notice) {
        return this.noticeService.createNotice(notice);
    }
    getNotice(id) {
        return this.noticeService.getNotice(id);
    }
    getAllNotices() {
        return this.noticeService.getAllNotices();
    }
    deleteNotice(user, id) {
        (0, vadePlsCode_1.getNoticeByID)(id).then(notice => {
            if (user.userID.toString() == notice.userId.toString() ||
                user.userID.toString() == constants_1.adminID.toString()) {
                this.noticeService.deleteNotice(id);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        });
    }
    editNotice(user, noticeId, dto) {
        return (0, vadePlsCode_1.getNoticeByID)(noticeId).then(notice => {
            if (user.userID.toString() == notice.userId.toString() ||
                user.userID.toString() == constants_1.adminID.toString()) {
                return this.noticeService.editNotice(noticeId, dto);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        });
    }
};
exports.NoticeController = NoticeController;
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.NoticeDto]),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "createNotice", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "getNotice", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "getAllNotices", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "deleteNotice", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, dto_1.EditNoticeDto]),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "editNotice", null);
exports.NoticeController = NoticeController = __decorate([
    (0, common_1.Controller)('notice'),
    __metadata("design:paramtypes", [notice_service_1.NoticeService])
], NoticeController);
//# sourceMappingURL=notice.controller.js.map