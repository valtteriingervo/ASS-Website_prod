import { NoticeDto, EditNoticeDto } from './dto';
export declare class NoticeService {
    createNotice(notice: NoticeDto): Promise<import("../../database/util/databaseTypes").NoticeAttributes>;
    getNotice(id: number): Promise<import("../../database/util/databaseTypes").NoticeAttributes>;
    getAllNotices(): Promise<import("../../database/util/databaseTypes").NoticeAttributes[]>;
    deleteNotice(id: number): void;
    editNotice(noticeId: number, dto: EditNoticeDto): Promise<import("../../database/util/databaseTypes").NoticeAttributes>;
}
