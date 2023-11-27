"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNoticeComment = exports.getAllNoticeComments = exports.getNoticeCommentByID = exports.createNoticeComment = exports.getCommentsInNotice = exports.deleteNotice = exports.updateNotice = exports.getAllNotices = exports.getNoticeByID = exports.createNotice = exports.deleteUser = exports.updateUser = exports.getUsersNotices = exports.getAllUsers = exports.getUserByUsername = exports.getUser = exports.getPartialUser = exports.createUser = void 0;
const common_1 = require("@nestjs/common");
const index_1 = require("../database/model/index");
const createUser = async (newUser) => {
    try {
        const newUserInDB = await index_1.User.create(newUser);
        const createdUser = {
            userID: newUserInDB.id,
            email: newUserInDB.email,
        };
        return createdUser;
    }
    catch (error) {
        throw new common_1.ForbiddenException(`Something went wrong when trying to create a new user: ${error}`);
    }
};
exports.createUser = createUser;
const getPartialUser = async (email) => {
    try {
        const userByEmail = await index_1.User.findOne({
            where: {
                email: email,
            },
        });
        if (userByEmail) {
            const partialUser = {
                email: userByEmail?.email,
                userID: userByEmail?.id,
                password: userByEmail?.password,
            };
            console.log('partialUser', partialUser);
            return partialUser;
        }
        else {
            throw new common_1.ForbiddenException(`There is no user with the email: ${email}`);
        }
    }
    catch (error) {
        throw new common_1.ForbiddenException(`Something went wrong when trying to get partial user by email ${error}`);
    }
};
exports.getPartialUser = getPartialUser;
const getUser = async (id) => {
    try {
        const userByID = await index_1.User.findByPk(id);
        if (userByID) {
            return {
                email: userByID?.email,
                userID: userByID?.id,
                username: userByID?.username,
                profilePicture: userByID?.profilePicture,
                typeOfLifting: userByID?.typeOfLifting,
                favouriteLift: userByID?.favouriteLift,
                favouriteGym: userByID?.favouriteGym,
                favouriteGymTime: userByID?.favouriteGymTime,
                contactInfo: userByID?.contactInfo,
            };
        }
        else {
            throw new common_1.ForbiddenException(`There is no user with the id: ${id}`);
        }
    }
    catch (error) {
        throw new common_1.ForbiddenException(`Something went wrong when trying to getUser with id: ${error}`);
    }
};
exports.getUser = getUser;
const getUserByUsername = async (username) => {
    try {
        const userByUsername = await index_1.User.findOne({
            where: {
                username: username,
            },
        });
        if (userByUsername) {
            console.log('userByUsername.dataValues', userByUsername.dataValues);
            return userByUsername.dataValues;
        }
        else {
            throw new common_1.ForbiddenException(`There is no user with the username: ${username}`);
        }
    }
    catch (error) {
        throw new common_1.ForbiddenException(`Something went wrong when trying to get user by username: ${error}`);
    }
};
exports.getUserByUsername = getUserByUsername;
const getAllUsers = async () => {
    try {
        const users = await index_1.User.findAll();
        const prunedUsers = users.map(user => {
            return {
                email: user.email,
                userID: user.id,
                username: user.username,
                profilePicture: user.profilePicture,
                typeOfLifting: user.typeOfLifting,
                favouriteLift: user.favouriteLift,
                favouriteGym: user.favouriteGym,
                favouriteGymTime: user.favouriteGymTime,
                contactInfo: user.contactInfo,
            };
        });
        console.log(prunedUsers);
        return prunedUsers;
    }
    catch (error) {
        throw new common_1.ForbiddenException(`Something went wrong when trying to get all users ${error}`);
    }
};
exports.getAllUsers = getAllUsers;
const getUsersNotices = async (userId) => {
    try {
        const user = await index_1.User.findByPk(userId, {
            include: [
                {
                    model: index_1.Notice,
                },
            ],
        });
        if (user) {
            console.log('user.dataValues', user.dataValues);
            console.log('In a prettier JSON format', JSON.stringify(user, null, 2));
            return user.dataValues;
        }
        else {
            throw new common_1.ForbiddenException(`There is no user with such id: ${userId}`);
        }
    }
    catch (error) {
        throw new common_1.ForbiddenException(`Something went wrong when trying to get the users notices: ${error}`);
    }
};
exports.getUsersNotices = getUsersNotices;
const updateUser = async (user) => {
    console.log('user', user);
    try {
        const userToUpdate = await index_1.User.findByPk(user.id);
        if (userToUpdate) {
            userToUpdate.profilePicture = user.profilePicture
                ? user.profilePicture
                : userToUpdate.profilePicture;
            userToUpdate.typeOfLifting = user.typeOfLifting
                ? user.typeOfLifting
                : userToUpdate.typeOfLifting;
            userToUpdate.favouriteLift = user.favouriteLift
                ? user.favouriteLift
                : userToUpdate.favouriteLift;
            userToUpdate.favouriteGym = user.favouriteGym
                ? user.favouriteGym
                : userToUpdate.favouriteGym;
            userToUpdate.favouriteGymTime = user.favouriteGymTime
                ? user.favouriteGymTime
                : userToUpdate.favouriteGymTime;
            userToUpdate.contactInfo = user.contactInfo
                ? user.contactInfo
                : userToUpdate.contactInfo;
            await userToUpdate.save();
            console.log('userToUpdate.dataValues', userToUpdate.dataValues);
            const updatedUserToReturn = {
                id: userToUpdate.id,
                profilePicture: userToUpdate.profilePicture,
                typeOfLifting: userToUpdate.typeOfLifting,
                favouriteLift: userToUpdate.favouriteLift,
                favouriteGym: userToUpdate.favouriteGym,
                favouriteGymTime: userToUpdate.favouriteGymTime,
                contactInfo: userToUpdate.contactInfo,
            };
            console.log('updatedUserToReturn', updatedUserToReturn);
            return updatedUserToReturn;
        }
        else {
            throw new common_1.ForbiddenException(`Could not update the user: There is no user with such id as: ${user.id}`);
        }
    }
    catch (error) {
        throw new common_1.ForbiddenException(`Something went wrong when trying to update the user: ${error}`);
    }
};
exports.updateUser = updateUser;
const deleteUser = async (userId) => {
    try {
        const userToDelete = await index_1.User.findByPk(userId);
        if (userToDelete) {
            await userToDelete.destroy();
        }
        else {
            throw new common_1.ForbiddenException(`Could not delete the user: There is no user with such id as: ${userId}`);
        }
    }
    catch (error) {
        throw new common_1.ForbiddenException(`Something went wrong when trying to delete the user: ${error}`);
    }
};
exports.deleteUser = deleteUser;
const createNotice = async (newNotice) => {
    console.log('newNotice: ', newNotice);
    try {
        const notice = await index_1.Notice.create(newNotice);
        console.log('notice.dataValues', notice.dataValues);
        return notice.dataValues;
    }
    catch (error) {
        throw new common_1.ForbiddenException(`Something went wrong when trying to create a new notice: ${error}`);
    }
};
exports.createNotice = createNotice;
const getNoticeByID = async (id) => {
    try {
        const noticeByID = await index_1.Notice.findByPk(id);
        if (noticeByID) {
            console.log('noticeByID.dataValues', noticeByID.dataValues);
            return noticeByID.dataValues;
        }
        else {
            throw new common_1.ForbiddenException(`There is no notice with such id: ${id}`);
        }
    }
    catch (error) {
        throw new common_1.ForbiddenException(`Something went wrong when trying to get notice by ID; ${error}`);
    }
};
exports.getNoticeByID = getNoticeByID;
const getAllNotices = async () => {
    try {
        const notices = await index_1.Notice.findAll();
        const prunedNotices = notices.map(notice => notice.dataValues);
        console.log(prunedNotices);
        return prunedNotices;
    }
    catch (error) {
        throw new common_1.ForbiddenException(`Something went wrong when trying to get all notices: ${error}`);
    }
};
exports.getAllNotices = getAllNotices;
const updateNotice = async (notice) => {
    console.log('notice', notice);
    try {
        const noticeToUpdate = await index_1.Notice.findByPk(notice.id);
        console.log(noticeToUpdate);
        if (noticeToUpdate) {
            noticeToUpdate.title = notice.title ? notice.title : noticeToUpdate.title;
            noticeToUpdate.text = notice.text ? notice.text : noticeToUpdate.text;
            noticeToUpdate.picture = notice.picture
                ? notice.picture
                : noticeToUpdate.picture;
            await noticeToUpdate.save();
            console.log('noticeToUpdate.dataValues', noticeToUpdate.dataValues);
            return noticeToUpdate.dataValues;
        }
        else {
            throw new common_1.ForbiddenException(`Could not update the notice: There is no notice with such id as: ${notice.id}`);
        }
    }
    catch (error) {
        throw new common_1.ForbiddenException(`Something went wrong when trying to update the notice: ${error}`);
    }
};
exports.updateNotice = updateNotice;
const deleteNotice = async (noticeId) => {
    try {
        const noticeToDelete = await index_1.Notice.findByPk(noticeId);
        console.log('noticeToDelete', noticeToDelete);
        if (noticeToDelete) {
            await noticeToDelete.destroy();
        }
        else {
            throw new common_1.ForbiddenException(`Could not delete the notice: There is no notice with such id as: ${noticeId}`);
        }
    }
    catch (error) {
        throw new common_1.ForbiddenException(`Something went wrong when trying to delete the notice: ${error}`);
    }
};
exports.deleteNotice = deleteNotice;
const getCommentsInNotice = async (noticeId) => {
    try {
        const notice = await index_1.Notice.findByPk(noticeId, {
            include: [
                {
                    model: index_1.NoticeComment,
                },
            ],
        });
        if (notice) {
            console.log('notice in a prettier format', JSON.stringify(notice, null, 2));
            console.log('notice.dataValues', notice.dataValues);
            return notice.dataValues;
        }
        else {
            throw new common_1.ForbiddenException(`Could not get comments in notice. There is no notice with the id: ${noticeId}`);
        }
    }
    catch (error) {
        throw new common_1.ForbiddenException(`Something went wrong when trying to get comments in notice: ${error}`);
    }
};
exports.getCommentsInNotice = getCommentsInNotice;
const createNoticeComment = async (newNoticeComment) => {
    console.log('newNoticeComment: ', newNoticeComment);
    try {
        const noticeComment = await index_1.NoticeComment.create(newNoticeComment);
        console.log('noticeComment.dataValues', noticeComment.dataValues);
        return noticeComment.dataValues;
    }
    catch (error) {
        throw new common_1.ForbiddenException(`Something went wrong when trying to create a new notice comment ${error}`);
    }
};
exports.createNoticeComment = createNoticeComment;
const getNoticeCommentByID = async (id) => {
    try {
        const noticeCommentByID = await index_1.NoticeComment.findByPk(id);
        if (noticeCommentByID) {
            console.log('noticeCommentByID.dataValues', noticeCommentByID.dataValues);
            return noticeCommentByID.dataValues;
        }
        else {
            throw new common_1.ForbiddenException(`Could not delete the notice comment. There is no notice comment with such id as: ${id}`);
        }
    }
    catch (error) {
        throw new common_1.ForbiddenException(`Something went wrong when trying to get a notice comment by id ${error}`);
    }
};
exports.getNoticeCommentByID = getNoticeCommentByID;
const getAllNoticeComments = async () => {
    try {
        const noticeComments = await index_1.NoticeComment.findAll();
        const prunedNoticeComments = noticeComments.map(noticeComment => noticeComment.dataValues);
        console.log(prunedNoticeComments);
        return prunedNoticeComments;
    }
    catch (error) {
        throw new common_1.ForbiddenException(`Something went wrong when trying to get all notice comments ${error}`);
    }
};
exports.getAllNoticeComments = getAllNoticeComments;
const deleteNoticeComment = async (noticeCommentId) => {
    try {
        const noticeCommentToDelete = await index_1.NoticeComment.findByPk(noticeCommentId);
        console.log('noticeCommentToDelete', noticeCommentToDelete);
        if (noticeCommentToDelete) {
            await noticeCommentToDelete.destroy();
        }
        else {
            throw new common_1.ForbiddenException(`Could not delete the notice comment: There is no notice comment with such id as: ${noticeCommentId}`);
        }
    }
    catch (error) {
        throw new common_1.ForbiddenException(`Something went wrong when trying to delete the notice comment: ${error}`);
    }
};
exports.deleteNoticeComment = deleteNoticeComment;
//# sourceMappingURL=vadePlsCode.js.map