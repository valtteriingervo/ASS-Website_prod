import { Sequelize } from 'sequelize';
import 'dotenv/config';
declare const sequelize: Sequelize;
declare const rollbackMigration: () => Promise<void>;
declare const connectToDatabase: () => Promise<null>;
export { connectToDatabase, sequelize, rollbackMigration };
