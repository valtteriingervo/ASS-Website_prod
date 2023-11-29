import { NoticeService } from './notice.service';
import { NoticeDto, EditNoticeDto } from './dto';
export declare class NoticeController {
    private noticeService;
    constructor(noticeService: NoticeService);
    createNotice(notice: NoticeDto): Promise<import("../../database/util/databaseTypes").NoticeAttributes>;
    getNotice(id: number): Promise<import("../../database/util/databaseTypes").NoticeAttributes>;
    getAllNotices(): Promise<import("../../database/util/databaseTypes").NoticeAttributes[]>;
    deleteNotice(user: {
        userID: number;
    }, id: number): void;
    editNotice(user: {
        userID: number;
    }, noticeId: number, dto: EditNoticeDto): Promise<import("../../database/util/databaseTypes").NoticeAttributes>;
}
