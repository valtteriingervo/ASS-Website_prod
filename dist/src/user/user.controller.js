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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const guard_1 = require("../auth/guard");
const decorator_1 = require("../auth/decorator");
const constants_1 = require("../constants");
const dto_1 = require("./dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    deleteUser(user, userID) {
        if (user.userID.toString() == userID.toString() ||
            user.userID.toString() == constants_1.adminID.toString()) {
            this.userService.deleteUser(userID);
        }
        else {
            throw new common_1.UnauthorizedException();
        }
    }
    getUser(userID) {
        return this.userService.getUser(Number(userID));
    }
    getAllUsers() {
        return this.userService.getAllUsers();
    }
    editUser(user, userID, dto) {
        if (user.userID.toString() == userID.toString() ||
            user.userID.toString() == constants_1.adminID.toString()) {
            return this.userService.editUser(userID, dto);
        }
        else {
            throw new common_1.UnauthorizedException();
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Delete)(':userID'),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Get)(':userID'),
    __param(0, (0, common_1.Param)('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Patch)(':userID'),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('userID')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, dto_1.EditDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "editUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map