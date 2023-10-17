import { IDataAccessObject } from "../dataAccessObject/IDataAccessObject";
import { IDataObject } from "../dataObject/IDataObject";
import { IHaveFileName } from "../types/IHaveFileName";

export interface IDatabase extends IHaveFileName {
  create<T extends IDataObject>(name: string): IDataAccessObject<T>;
  delete(name: string): boolean;
  readonly name: string;
  readonly tables: IDataAccessObject<any>[];
}
