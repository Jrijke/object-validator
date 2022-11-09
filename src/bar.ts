// Interfaces
import { validObject } from "./interfaces";

export const barSchema = {
    name: 'string',
    address: 'string',
    drinks: 'object',
};

export const barObj: validObject = {
    name: 'Jimmys drinks',
    address: 'Somewhere over the rainbow',
    drinks: {
        beer: ['Straffe Hendrik', 'Rochefort', 'St Bernard'],
    },
};

export const barObjF: validObject = {
    name: 'Sjonnies',
    address: 'Centrum 001',
    drinks: [
        'Heineken', 
    ]
};