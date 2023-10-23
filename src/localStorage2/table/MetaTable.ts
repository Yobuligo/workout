import { UUIDGenerator } from "../idGenerator/UUIDGenerator";
import { IStorage } from "../storage/IStorage";
import { ITableMeta } from "./ITableMeta";
import { Table } from "./Table";

/**
 * This class represents the table which handles the meta information of the tables.
 */
export class MetaTable extends Table<ITableMeta> {
  constructor(tableName: string, storage: IStorage<ITableMeta>) {
    super(`db.${tableName}`, storage, new UUIDGenerator());
  }
}
