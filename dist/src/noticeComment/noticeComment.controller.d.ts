import { NoticeCommentService } from './noticeComment.service';
import { CreateNoticeCommentDto } from './dto';
export declare class NoticeCommentController {
    private noticeCommentService;
    constructor(noticeCommentService: NoticeCommentService);
    createNoticeComment(noticeComment: CreateNoticeCommentDto): Promise<import("../../database/util/databaseTypes").NoticeCommentAttributes>;
    getCommentsInNotice(noticeId: number): Promise<import("../../database/util/databaseTypes").NoticeAttributes>;
    deleteNoticeComment(user: {
        userID: number;
    }, id: number): void;
}
