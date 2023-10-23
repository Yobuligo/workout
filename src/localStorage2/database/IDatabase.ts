import { ITable } from "../table/ITable";
import { ITableConfig } from "../table/ITableConfig";
import { IRecord } from "../record/IRecord";
import { IdType } from "../types/IdType";

/**
 * An implementation of this interface represents a database.
 */
export interface IDatabase {
  define<TRecord extends IRecord<IdType>>(
    name: string,
    config?: ITableConfig
  ): ITable<TRecord>;

  /**
   * Drops the table with the given {@link name}
   */
  drop(name: string): boolean;
  readonly fileName: string;
  readonly name: string;
  readonly tables: ITable<any>[];
}
