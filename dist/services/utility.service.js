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
exports.parseJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const parseJwt = (token) => __awaiter(void 0, void 0, void 0, function* () {
    // token = jwt.verify(token, jwtSecretKey);
    token = token.substring(7);
    token = jsonwebtoken_1.default.decode(token);
    return token;
});
exports.parseJwt = parseJwt;
//# sourceMappingURL=utility.service.js.map