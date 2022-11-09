// Interfaces
import { validObject } from "./interfaces";

export const carSchema = {
    brand: 'string',
    type: 'string',
    milage: 'number',
    extras: 'array',
};

export const carObj: validObject = {
    brand: 'Mazda',
    type: 'MX5 NB 1.8',
    milage: 199999.99,
    extras: [
        '2001 Special Edition'
    ],
};