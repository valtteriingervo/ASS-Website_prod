import { CreateNoticeCommentDto } from './dto';
export declare class NoticeCommentService {
    createNoticeComment(noticeComment: CreateNoticeCommentDto): Promise<import("../../database/util/databaseTypes").NoticeCommentAttributes>;
    getNoticeComment(id: number): Promise<import("../../database/util/databaseTypes").NoticeCommentAttributes>;
    getCommentsInNotice(noticeId: number): Promise<import("../../database/util/databaseTypes").NoticeAttributes>;
    deleteNoticeComment(id: number): void;
}
