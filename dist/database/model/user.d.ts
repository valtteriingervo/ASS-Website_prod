import { Model } from 'sequelize';
import { UserAttributes, UserCreationAttributes } from 'database/util/databaseTypes';
declare class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    id: number;
    username: string;
    password: string;
    email: string;
    profilePicture?: string | null;
    typeOfLifting?: string | null;
    favouriteLift?: string | null;
    favouriteGym?: string | null;
    favouriteGymTime?: string | null;
    contactInfo?: string | null;
}
export { User };
