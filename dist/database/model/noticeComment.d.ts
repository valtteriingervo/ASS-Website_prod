import { Model } from 'sequelize';
import { NoticeCommentAttributes, NoticeCommentCreationAttributes } from 'database/util/databaseTypes';
declare class NoticeComment extends Model<NoticeCommentAttributes, NoticeCommentCreationAttributes> implements NoticeCommentAttributes {
    id: number;
    text: string;
    createdAt: string;
    userId: number;
    noticeId: number;
}
export { NoticeComment };
