"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuthHeader = exports.validateTablePayload = void 0;
const express_validator_1 = require("express-validator");
exports.validateTablePayload = [
    (0, express_validator_1.body)('Asset', 'Asset Name is required')
        .trim()
        .exists()
        .notEmpty()
        .isString(),
    (0, express_validator_1.body)('Tank', 'Tank name is required')
        .trim()
        .exists()
        .notEmpty()
        .isString(),
    (0, express_validator_1.body)('TankShape', 'TankShape name is required')
        .trim()
        .exists()
        .notEmpty()
        .isString(),
    (0, express_validator_1.body)('Organization', 'Organization name is required')
        .trim()
        .exists()
        .notEmpty()
        .isString()
];
exports.validateAuthHeader = [
    (0, express_validator_1.header)('Authorization', 'Authorization key is required')
        .trim()
        .exists()
        .notEmpty()
];
//# sourceMappingURL=validation.middleware.js.map