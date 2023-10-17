import { IDataObject } from "../dataObject/IDataObject";
import { IDataObjectDetails } from "../dataObject/IDataObjectDetails";
import { IFilter } from "../types/IFilter";
import { IHaveFileName } from "../types/IHaveFileName";

export interface IDataAccessObject<T extends IDataObject>
  extends IHaveFileName {
  readonly name: string;
  delete(dataObject: T): boolean;
  deleteById(id: number): boolean;
  findAll(): T[];
  findById(id: number): T | undefined;
  findByFilter(filter?: IFilter<T>): T[];
  findFirst(filter?: IFilter<T>): T | undefined;
  insert(dataObject: IDataObjectDetails<T>): T;
  update(dataObject: T): T;
}
