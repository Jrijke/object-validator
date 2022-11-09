export default function validateObject(obj: object, schema: object) {
  for(const item in obj) {
    if(Number.isInteger(obj[item]) && schema[item] !== 'number') return false;
    if(obj[item] instanceof Array && schema[item] !== 'array') return false;
  }
  return true;
}