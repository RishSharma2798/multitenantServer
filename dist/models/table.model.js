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
exports.defineTable = void 0;
const index_1 = require("../index");
const sequelize_1 = require("sequelize");
// Ensure sequelize is properly imported from '../index'
// Define your model using sequelize.define
function defineTable(decodedToken) {
    return __awaiter(this, void 0, void 0, function* () {
        const Table = index_1.sequelize.define('Table', {
            Id: { type: sequelize_1.DataTypes.BIGINT, autoIncrement: true, primaryKey: true, allowNull: false },
            Asset: { type: sequelize_1.DataTypes.STRING, allowNull: false },
            Tank: { type: sequelize_1.DataTypes.STRING, allowNull: false },
            TankShape: { type: sequelize_1.DataTypes.STRING, allowNull: false },
            Organization: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        }, { tableName: 'table' });
        // Ensure that the Table model is synchronized with the database schema
        yield Table.sync();
        return Table;
    });
}
exports.defineTable = defineTable;
//# sourceMappingURL=table.model.js.map