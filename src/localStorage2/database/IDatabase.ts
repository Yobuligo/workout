import { ITable } from "../table/ITable";
import { ITableConfig } from "../table/ITableConfig";
import { IRecord } from "../types/IRecord";
import { IdType } from "../types/IdType";

/**
 * An implementation of this interface represents a database.
 */
export interface IDatabase {
  define<T extends IRecord<IdType>>(
    name: string,
    config?: ITableConfig
  ): ITable<T>;
  delete(name: string): boolean;
  readonly fileName: string;
  readonly name: string;
  readonly tables: ITable<any>[];
}
