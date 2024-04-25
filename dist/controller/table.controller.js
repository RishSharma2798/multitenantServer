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
exports.tableController = void 0;
const { validationResult } = require('express-validator');
const base_controller_1 = require("./base.controller");
const __1 = require("..");
const table_service_1 = require("../services/table.service");
class tableController extends base_controller_1.BaseController {
    constructor() {
        super();
    }
    getTableData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    res.status(400).json({ errors: errors.array() });
                    return;
                }
                let response = yield (0, table_service_1.fetchTableData)(__1.dbName);
                this.jsonRes(response, res);
            }
            catch (e) {
                this.errRes(e, res, 'unexpected error occurred', 400);
            }
        });
    }
}
exports.tableController = tableController;
//# sourceMappingURL=table.controller.js.map