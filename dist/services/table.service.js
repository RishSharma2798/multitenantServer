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
exports.fetchTableData = void 0;
const table_model_1 = require("../models/table.model");
const fetchTableData = (decodedToken) => __awaiter(void 0, void 0, void 0, function* () {
    const Table = yield (0, table_model_1.defineTable)(decodedToken);
    const tableData = yield Table.findAll({
        order: [['Id', 'ASC']]
    });
    const result = JSON.parse(JSON.stringify(tableData));
    return result;
});
exports.fetchTableData = fetchTableData;
// export const createTableData = async (
//     payload : Payload
// ) =>{
//     let transaction: any;
//     try{
//         const check = await Table.findOne({
//             where : {
//                 Asset : payload.Asset
//             }
//         })
//         if(check){
//             throw 'Asset exists';
//         }
//         else{
//             const result: any = await Table.create({
//                 Asset: payload.Asset,
//                 Tank: payload.Tank,
//                 TankShape: payload.TankShape,
//                 Organization:payload.Organization
//             });
//         }
//         await transaction.commit()
//         return { Success: true};
//     }
//     catch(e){
//         if (transaction) {
//             await transaction.rollback();
//         }
//         throw e;
//     }
// }
//# sourceMappingURL=table.service.js.map