"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollbackMigration = exports.sequelize = exports.connectToDatabase = void 0;
const sequelize_1 = require("sequelize");
const umzug_1 = require("umzug");
require("dotenv/config");
const DATABASE_URL = process.env.DATABASE_URL || 'no database URL';
const sequelize = new sequelize_1.Sequelize(process.env.DATABASE_URL || 'no database URL', {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});
exports.sequelize = sequelize;
const migrationConf = {
    migrations: {
        glob: '../migrations/*.ts',
    },
    storage: new umzug_1.SequelizeStorage({ sequelize, tableName: 'migrations' }),
    context: sequelize.getQueryInterface(),
    logger: console,
};
const runMigrations = async () => {
    const migrator = new umzug_1.Umzug(migrationConf);
    const migrations = await migrator.up();
    console.log('Migrations up to date', {
        files: migrations.map(mig => mig.name),
    });
};
const rollbackMigration = async () => {
    await sequelize.authenticate();
    const migrator = new umzug_1.Umzug(migrationConf);
    await migrator.down();
};
exports.rollbackMigration = rollbackMigration;
const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        await runMigrations();
        console.log('database connected');
    }
    catch (err) {
        console.log('connecting database failed');
        return process.exit(1);
    }
    return null;
};
exports.connectToDatabase = connectToDatabase;
//# sourceMappingURL=db.js.map