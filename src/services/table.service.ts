import { Op, where,Model, col } from 'sequelize';
import { defineTable } from '../models/table.model';
import { validateTablePayload } from '../middleware/validation.middleware';
import { sequelize } from '../config/db';



interface Payload {
    Asset: string;
    Tank : string;
    TankShape: string,
    Organization : string
    // Define other properties here
}

export const fetchTableData = async () =>{
    const Table = await defineTable()
    const tableData = await Table.findAll({
        order: [['Id', 'ASC']]
    });
    const result = JSON.parse(JSON.stringify(tableData));
    return result;
}

export const createTableData = async (
    payload : Payload) =>{
    let transaction: any;
    try{
        transaction = await sequelize.transaction();
        const Table = await defineTable()
        const check = await Table.findOne({
            where : {
                Asset : payload.Asset
            }
        })
        if(check){
            throw 'Asset exists';
        }
        else{
            const result: any = await Table.create({
                Asset: payload.Asset,
                Tank: payload.Tank,
                TankShape: payload.TankShape,
                Organization:payload.Organization
            });
        }
        await transaction.commit()
        return { Success: true};

    }
    catch(e){
        if (transaction) {
            await transaction.rollback();
        }
        throw e;
    }

}