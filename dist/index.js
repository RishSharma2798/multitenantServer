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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.dbName = void 0;
const app_1 = __importDefault(require("./app"));
const db_1 = require("./config/db");
const Port = 4000;
var http = require('http').Server(app_1.default);
exports.dbName = 'tenant_1';
let sequelize;
exports.sequelize = sequelize;
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        // Connect to the database with the dynamic database name
        exports.sequelize = sequelize = yield (0, db_1.connectToDatabase)(exports.dbName);
        // Check if the database connection was successful
        if (!sequelize) {
            console.error('Failed to connect to the database. Exiting...');
            process.exit(1);
        }
        // Start your server or perform any other operations once the database is connected
        console.log('Database connected successfully. Starting server...');
        // Your server startup code here
    });
}
// Call the function to start the server
startServer();
const port = process.env.PORT || Port;
http.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map