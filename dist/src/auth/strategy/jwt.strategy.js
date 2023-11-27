"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const vadePlsCode_1 = require("../../vadePlsCode");
require("dotenv/config");
class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt') {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET,
        });
    }
    async validate(payload) {
        return (0, vadePlsCode_1.getPartialUser)(payload.email);
    }
}
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt.strategy.js.map