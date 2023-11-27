import { NoticeAttributes, NoticeCreationAttributes, UserAttributes, UserCreationAttributes, NoticeCommentAttributes, NoticeCommentCreationAttributes, UpdateUserAttributes, UpdateNoticeAttributes } from 'database/util/databaseTypes';
export declare const createUser: (newUser: UserCreationAttributes) => Promise<{
    userID: number;
    email: string;
}>;
export declare const getPartialUser: (email: string) => Promise<{
    email: string;
    userID: number;
    password: string;
}>;
export declare const getUser: (id: number) => Promise<{
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
export declare const getUserByUsername: (username: string) => Promise<UserAttributes>;
export declare const getAllUsers: () => Promise<{
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
export declare const getUsersNotices: (userId: number) => Promise<UserAttributes>;
export declare const updateUser: (user: UpdateUserAttributes) => Promise<UpdateUserAttributes>;
export declare const deleteUser: (userId: number) => Promise<void>;
export declare const createNotice: (newNotice: NoticeCreationAttributes) => Promise<NoticeAttributes>;
export declare const getNoticeByID: (id: number) => Promise<NoticeAttributes>;
export declare const getAllNotices: () => Promise<NoticeAttributes[]>;
export declare const updateNotice: (notice: UpdateNoticeAttributes) => Promise<NoticeAttributes>;
export declare const deleteNotice: (noticeId: number) => Promise<void>;
export declare const getCommentsInNotice: (noticeId: number) => Promise<NoticeAttributes>;
export declare const createNoticeComment: (newNoticeComment: NoticeCommentCreationAttributes) => Promise<NoticeCommentAttributes>;
export declare const getNoticeCommentByID: (id: number) => Promise<NoticeCommentAttributes>;
export declare const getAllNoticeComments: () => Promise<NoticeCommentAttributes[]>;
export declare const deleteNoticeComment: (noticeCommentId: number) => Promise<void>;
