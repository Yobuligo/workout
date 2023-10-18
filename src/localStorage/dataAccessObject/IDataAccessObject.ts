import { IDataObject } from "../dataObject/IDataObject";
import { IDataObjectDetails } from "../dataObject/IDataObjectDetails";
import { IFilter } from "../filter/IFilter";
import { IHaveFileName } from "../types/IHaveFileName";

export interface IDataAccessObject<T extends IDataObject>
  extends IHaveFileName {
  readonly name: string;
  delete(dataObject: T): boolean;
  deleteById(id: number): boolean;
  findAll(filter?: IFilter<T>): T[];
  findById(id: number): T | undefined;
  findFirst(filter?: IFilter<T>): T | undefined;
  insert(dataObject: IDataObjectDetails<T>): T;
  update(dataObject: T): T;
}
