"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const sequelize_1 = require("sequelize");
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER;
const dbPassword = process.env.DB_PASSWORD;
let sequelize;
function connectToDatabase(dbName) {
    return __awaiter(this, void 0, void 0, function* () {
        sequelize = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
            dialect: dbDriver,
            host: dbHost,
            protocol: 'tcp',
            ssl: false,
            pool: { min: 0, max: 20, idle: 10000 },
            dialectOptions: {
                encrypt: true,
                options: {
                    requestTimeout: 30000
                }
            },
            define: { timestamps: false },
            logging: process.env.NODE_ENV === 'production' ? false : console.log
        });
        try {
            yield sequelize.authenticate();
            console.log('Connection has been established successfully.');
            return sequelize;
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
            throw error;
        }
    });
}
exports.connectToDatabase = connectToDatabase;
//# sourceMappingURL=db.js.map