import { AutoIncrement } from "../autoIncrement/AutoIncrement";
import { DataAccessObject } from "../dataAccessObject/DataAccessObject";
import { IDataAccessObject } from "../dataAccessObject/IDataAccessObject";
import { IDataObject } from "../dataObject/IDataObject";
import { Todo } from "../utils/Todo";
import { IDatabase } from "./IDatabase";

export class Database implements IDatabase {
  readonly fileName: string;
  readonly tables: IDataAccessObject<any>[] = [];

  constructor(readonly name: string) {
    this.fileName = `db.${name}`;
  }

  create<T extends IDataObject>(name: string): IDataAccessObject<T> {
    const tableFileName = `${this.fileName}.${name}`;
    const autoIncrement = new AutoIncrement(this.fileName, tableFileName);
    return new DataAccessObject(name, tableFileName, autoIncrement);
  }

  delete(name: string): boolean {
    return Todo();
  }
}