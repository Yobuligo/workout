import { IAutoIncrement } from "../autoIncrement/IAutoIncrement";
import { IDataObject } from "../dataObject/IDataObject";
import { IDataObjectDetails } from "../dataObject/IDataObjectDetails";
import { IFilter } from "../filter/IFilter";
import { filterItems } from "../filter/filterItems";
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
    return this.deleteById(dataObject.id);
  }

  deleteById(id: number): boolean {
    const items = this.findAll();
    if (items.length === 0) {
      return false;
    }

    const index = items.findIndex((item) => item.id === id);
    if (index === -1) {
      return false;
    }

    items.splice(index, 1);
    return true;
  }

  findAll(filter?: IFilter<T>): T[] {
    let items = readLocalStorage<T[]>(this.fileName) ?? [];
    if (filter) {
      items = filterItems(items, filter);
    }
    return items;
  }

  findById(id: number): T | undefined {
    const items = this.findAll();
    for (const item of items) {
      if (item.id === id) {
        return item;
      }
    }
  }

  findFirst(filter?: IFilter<T> | undefined): T | undefined {
    return this.findAll(filter)[0];
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
