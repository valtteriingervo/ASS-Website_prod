import { Model } from 'sequelize';
import { NoticeAttributes, NoticeCreationAttributes } from 'database/util/databaseTypes';
declare class Notice extends Model<NoticeAttributes, NoticeCreationAttributes> implements NoticeAttributes {
    id: number;
    title: string;
    text: string;
    picture?: string | null;
    createdAt: string;
    userId: number;
}
export { Notice };
