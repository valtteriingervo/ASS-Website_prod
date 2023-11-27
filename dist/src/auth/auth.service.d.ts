import { LoginDto, RegisterDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import 'dotenv/config';
export declare class AuthService {
    private jwt;
    constructor(jwt: JwtService);
    signToken(userID: number, email: string): Promise<{
        access_token: string;
    }>;
    createUserObject: (dto: RegisterDto, hash: string) => {
        password: string;
        username: string;
        email: string;
        profilePicture: string;
        typeOfLifting: string;
        favouriteLift: string;
        favouriteGym: string;
        favouriteGymTime: string;
        contactInfo: string;
    };
    register(dto: RegisterDto): Promise<{
        access_token: string;
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
    }>;
}
