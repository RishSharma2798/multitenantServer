import { body, check, header, param } from 'express-validator';

export const validateTablePayload = [
    body('Asset', 'Asset Name is required')
    .trim()
    .exists()
    .notEmpty()
    .isString(),
body('Tank', 'Tank name is required')
    .trim()
    .exists()
    .notEmpty()
    .isString(),
    body('TankShape', 'TankShape name is required')
    .trim()
    .exists()
    .notEmpty()
    .isString(),
    body('Organization', 'Organization name is required')
    .trim()
    .exists()
    .notEmpty()
    .isString()
];

export const validateAuthHeader = [
    header('Authorization', 'Authorization key is required')
        .trim()
        .exists()
        .notEmpty()
];

