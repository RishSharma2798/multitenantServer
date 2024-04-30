import { Request, Response } from 'express';
const { validationResult } = require('express-validator');
import { BaseController } from './base.controller';
import { dbName } from '..';

import { fetchTableData,createTableData} from '../services/table.service'

export class tableController extends BaseController{
    constructor(){
        super()
    }
    async getTableData(req: Request, res: Response){
        try{
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ errors: errors.array() });
                return;
            }

            let response = await fetchTableData();
            this.jsonRes(response, res);
        }
        catch (e) {
            this.errRes(e, res, 'unexpected error occurred', 400);
        }
    }

    async createTableData(req: Request, res: Response){
        try{
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ errors: errors.array() });
                return;
            }
            
            const payload = {
                 Asset : req.body.Asset,
                 Tank : req.body.Tank,
                 TankShape :  req.body.TankShape,
                 Organization: req.body.Organization
            }

            let response = await createTableData(payload);
            this.jsonRes(response, res);
        }
        catch (e) {
            this.errRes(e, res, 'unexpected error occurred', 400);
        }
    }
}