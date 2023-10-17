import { IDataObject } from "./dataObject/IDataObject";

export interface IPerson extends IDataObject {
  age: number;
  firstname: string;
  lastname: string;
}
