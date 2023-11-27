"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcrypt"));
const vadePlsCode_1 = require("./../vadePlsCode");
require("dotenv/config");
let AuthService = class AuthService {
    constructor(jwt) {
        this.jwt = jwt;
        this.createUserObject = (dto, hash) => {
            const optionalUserFields = {
                profilePicture: undefined,
                typeOfLifting: undefined,
                favouriteLift: undefined,
                favouriteGym: undefined,
                favouriteGymTime: undefined,
                contactInfo: undefined,
            };
            return { ...optionalUserFields, ...dto, password: hash };
        };
    }
    async signToken(userID, email) {
        const payload = {
            sub: userID,
            email,
        };
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '30m',
            secret: process.env.JWT_SECRET,
        });
        return {
            access_token: token,
        };
    }
    register(dto) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hash(dto.password, salt).then(hash => {
            const user = this.createUserObject(dto, hash);
            return (0, vadePlsCode_1.createUser)(user).then(user => {
                return this.signToken(user.userID, user.email);
            });
        });
    }
    login(dto) {
        return (0, vadePlsCode_1.getPartialUser)(dto.email).then(user => {
            return bcrypt.compare(dto.password, user.password).then(pwMatch => {
                if (!pwMatch) {
                    throw new common_1.UnauthorizedException();
                }
                return this.signToken(user.userID, user.email);
            });
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)({}),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map