import { ITableMeta } from "../table/ITableMeta";
import { Table } from "../table/Table";

export class DatabaseTable extends Table<ITableMeta> {
  constructor(databaseName: string) {
    super("");
  }
}
