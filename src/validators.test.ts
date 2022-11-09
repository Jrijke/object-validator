// vitest helpers
import { describe, expect, it } from "vitest";

// validate function
import validateObject from "./validator";

// objects
import { carSchema, carObj } from './car';
import { barSchema, barObj, barObjF } from './bar';
import { personSchema, personObj, personObjF } from './person';

describe('#validate carObj', () => {
  it('should validate if the carObj object matches the given schema', () => {
    expect(validateObject(carObj, carSchema)).toBe(true);
  });
  it('should validate if the personObj object matches the given schema', () => {
    expect(validateObject(personObj, personSchema)).toBe(true);
  });
  it('should validate if the personObjF object does not match the given schema', () => {
    expect(validateObject(personObjF, carSchema)).not.toBe(true);
  });
  it('should validate if the barObj object matches the given schema', () => {
    expect(validateObject(barObj, barSchema)).toBe(true);
  });
  it('should validate if the personObjF object does not match the given schema', () => {
    expect(validateObject(barObjF, carSchema)).not.toBe(true);
  });
})
