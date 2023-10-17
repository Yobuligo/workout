import { IAutoIncrement } from "../autoIncrement/IAutoIncrement";
import { IDataObject } from "../dataObject/IDataObject";
import { IDataObjectDetails } from "../dataObject/IDataObjectDetails";
import { IFilter } from "../types/IFilter";
import { Todo } from "../utils/Todo";
import { readLocalStorage } from "../utils/readLocalStorage";
import { writeLocalStorage } from "../utils/writeLocalStorage";
import { IDataAccessObject } from "./IDataAccessObject";

export class DataAccessObject<T extends IDataObject>
  implements IDataAccessObject<T>
{
  constructor(
    readonly name: string,
    readonly fileName: string,
    private autoIncrement: IAutoIncrement
  ) {}

  delete(dataObject: T): boolean {
    throw new Error("Method not implemented.");
  }

  deleteById(id: number): boolean {
    throw new Error("Method not implemented.");
  }

  findAll(): T[] {
    return readLocalStorage(this.fileName) ?? [];
  }

  findByFilter(filter?: IFilter<T> | undefined): T[] {
    return Todo();
  }

  findById(id: number): T | undefined {
    const data = this.findAll();
    for (const item of data) {
      if (item.id === id) {
        return item;
      }
    }
  }

  findFirst(filter?: IFilter<T> | undefined): T | undefined {
    return Todo();
  }

  insert(dataObject: IDataObjectDetails<T>): T {
    const id = this.autoIncrement.next();
    const newItem = { ...dataObject, id } as T;
    this.append(newItem);
    return newItem;
  }

  update(dataObject: T): T {
    throw new Error("Method not implemented.");
  }

  private append(dataObject: T) {
    const items = this.findAll();
    items.push(dataObject);
    writeLocalStorage(this.fileName, items);
  }
}
