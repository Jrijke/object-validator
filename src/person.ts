// Interfaces
import { validObject } from "./interfaces";

export const personSchema = {
    name: 'string',
    age: 'number',
    siblings: 'array',
    metaData: 'object',
    active: 'boolean',
 };

export const personObj: validObject = {
    name: 'James',
    age: 25,
    siblings: ['Johnnathan'],
    metaData: {},
    active: true,
};

export const personObjF: validObject = {
    name: 'James',
    age: 25,
    active: true,
};