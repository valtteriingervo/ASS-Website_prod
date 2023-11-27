import { Strategy } from 'passport-jwt';
import 'dotenv/config';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: {
        sub: number;
        email: string;
    }): Promise<{
        email: string;
        userID: number;
        password: string;
    }>;
}
export {};
