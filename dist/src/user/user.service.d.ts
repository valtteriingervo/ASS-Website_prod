import { EditDto } from './dto';
export declare class UserService {
    getUser(userID: number): Promise<{
        email: string;
        userID: number;
        username: string;
        profilePicture: string | null | undefined;
        typeOfLifting: string | null | undefined;
        favouriteLift: string | null | undefined;
        favouriteGym: string | null | undefined;
        favouriteGymTime: string | null | undefined;
        contactInfo: string | null | undefined;
    }>;
    getAllUsers(): Promise<{
        email: string;
        userID: number;
        username: string;
        profilePicture: string | null | undefined;
        typeOfLifting: string | null | undefined;
        favouriteLift: string | null | undefined;
        favouriteGym: string | null | undefined;
        favouriteGymTime: string | null | undefined;
        contactInfo: string | null | undefined;
    }[]>;
    editUser(id: number, dto: EditDto): Promise<import("../../database/util/databaseTypes").UpdateUserAttributes>;
    deleteUser(userID: number): void;
}
