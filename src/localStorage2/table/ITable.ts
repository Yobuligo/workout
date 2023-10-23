import { IRecord } from "../types/IRecord";
import { IRecordDetails } from "../types/IRecordDetails";

/**
 * An implementation of this interface represents a table.
 */
export interface ITable<TRecord extends IRecord<any>> {
  readonly name: string;
  count(): number;
  delete(): void;
  insert(row: IRecordDetails<TRecord>): void;
  select(): TRecord[];
  update(): void;
}
