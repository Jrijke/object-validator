export interface validObject {
  name?: string;
  brand?: string;
  type?: string;
  address?: string;
  milage?: number;
  age?: number;
  siblings?: [key: string];
  extras?: [key: string];
  metaData?: object;
  drinks?: object;
  active?: boolean;
}