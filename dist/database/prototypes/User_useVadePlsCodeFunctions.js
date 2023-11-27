"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vadePlsCode_1 = require("../../src/vadePlsCode");
const testUser = {
    username: 'liftingDude',
    password: 'hash500',
    email: 'liftingdude@gmail.com',
};
const testUserBunny = {
    username: 'cardioBunny',
    password: 'hash600',
    email: 'cardiobunny@gmail.com',
};
const testUserAllDetails = {
    username: 'crossFitGal',
    password: 'hash700',
    email: 'crossfitgal@gmail.com',
    profilePicture: 'www.picturehub.com/profilepicture.png',
    typeOfLifting: 'Crossfit / Bodybuilding',
    favouriteLift: 'Pull ups',
    favouriteGym: 'Unisport Kluuvi',
    favouriteGymTime: 'Tuesdays at 18 and Thursdays at 19',
    contactInfo: 'Telegram: @crossfitgal',
};
const testUserTimppa = {
    username: 'TankoTimppa',
    password: 'hash800',
    email: 'tankotimppa@gmail.com',
};
async function testUserCreation() {
    await (0, vadePlsCode_1.createUser)(testUserTimppa);
}
async function testGettingUserByEmail() {
    await (0, vadePlsCode_1.getPartialUser)('cardiobunny@gmail.com');
    await (0, vadePlsCode_1.getPartialUser)('liftingdude@hotmail.com');
}
async function testGetUser() {
    await (0, vadePlsCode_1.getUser)(3);
}
async function testGetAllUsers() {
    await (0, vadePlsCode_1.getAllUsers)();
}
async function testGetUsersNotices() {
    await (0, vadePlsCode_1.getUsersNotices)(1);
    await (0, vadePlsCode_1.getUsersNotices)(2);
    await (0, vadePlsCode_1.getUsersNotices)(100);
}
async function testGetUserByUsername() {
    await (0, vadePlsCode_1.getUserByUsername)('liftingDude');
    await (0, vadePlsCode_1.getUserByUsername)('cardioBunny');
}
async function testUpdateUser() {
    const updateThisUser = {
        id: 100,
        profilePicture: 'www.imgur.com/TankoTimppa.jpeg',
        typeOfLifting: 'Powerlifting',
        favouriteLift: 'squat',
        favouriteGym: 'Unisport Otaniemi',
        favouriteGymTime: 'Saturdays 13',
        contactInfo: 'TG: @TankoTimppa',
    };
    await (0, vadePlsCode_1.updateUser)(updateThisUser);
}
async function testDeleteUser() {
    await (0, vadePlsCode_1.deleteUser)(1);
}
testDeleteUser();
//# sourceMappingURL=User_useVadePlsCodeFunctions.js.map