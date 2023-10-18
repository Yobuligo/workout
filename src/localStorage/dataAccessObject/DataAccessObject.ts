import { IAutoIncrement } from "../autoIncrement/IAutoIncrement";
import { IDataObject } from "../dataObject/IDataObject";
import { IDataObjectDetails } from "../dataObject/IDataObjectDetails";
import { IFilter } from "../filter/IFilter";
import {
  doesMatchFilter,
  filterItems,
  reduceItems,
  updateItem,
} from "../filter/filterItems";
import { IStorage } from "../storage/IStorage";
import { IDataAccessObject } from "./IDataAccessObject";

export class DataAccessObject<T extends IDataObject>
  implements IDataAccessObject<T>
{
  constructor(
    readonly name: string,
    private storage: IStorage<T>,
    private autoIncrement: IAutoIncrement
  ) {}

  delete(dataObject: T): boolean {
    return this.deleteById(dataObject.id);
  }

  deleteAll(filter?: IFilter<T> | undefined): boolean {
    if (!filter) {
      this.storage.write([]);
      return true;
    }

    let items = this.findAll();
    const length = items.length;
    if (length > 0) {
      items = reduceItems(items, filter);
      this.storage.write(items);
      return items.length !== length;
    }

    return false;
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
    this.storage.write(items);
    return true;
  }

  findAll(filter?: IFilter<T>): T[] {
    let items = this.storage.read();
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

  update(dataObject: T): boolean {
    const items = this.findAll();
    const index = items.findIndex((item) => item.id === dataObject.id);
    if (index === -1) {
      return false;
    }

    items.splice(index, 1, dataObject);
    this.storage.write(items);
    return true;
  }

  updateAll(
    dataObject: Partial<IDataObjectDetails<T>>,
    filter?: IFilter<T> | undefined
  ): number {
    let count = 0;
    const items = this.findAll();
    items.forEach((item) => {
      if (!filter || doesMatchFilter(item, filter)) {
        if (updateItem(item, dataObject)) {
          count++;
        }
      }
    });
    this.storage.write(items);
    return count;
  }

  private append(dataObject: T) {
    const items = this.findAll();
    items.push(dataObject);
    this.storage.write(items);
  }
}
