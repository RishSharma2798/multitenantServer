"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const table_controller_1 = require("../controller/table.controller");
const Table = new table_controller_1.tableController();
router.get('/fetch', (req, res) => {
    Table.getTableData(req, res);
});
//# sourceMappingURL=table.routes.js.map