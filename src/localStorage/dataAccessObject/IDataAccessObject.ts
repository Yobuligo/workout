import { IDataObject } from "../dataObject/IDataObject";
import { IDataObjectDetails } from "../dataObject/IDataObjectDetails";
import { IFilter } from "../filter/IFilter";

export interface IDataAccessObject<T extends IDataObject> {
  readonly name: string;
  delete(dataObject: T): boolean;
  deleteAll(filter?: IFilter<T>): boolean;
  deleteById(id: number): boolean;
  findAll(filter?: IFilter<T>): T[];
  findById(id: number): T | undefined;
  findFirst(filter?: IFilter<T>): T | undefined;
  insert(dataObject: IDataObjectDetails<T>): T;
  update(dataObject: T): boolean;
  updateAll(
    dataObject: Partial<IDataObjectDetails<T>>,
    filter?: IFilter<T>
  ): number;
}
