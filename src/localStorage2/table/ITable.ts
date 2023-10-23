import { IRecord } from "../record/IRecord";
import { IRecordDetails } from "../record/IRecordDetails";

/**
 * An implementation of this interface represents a table.
 */
export interface ITable<TRecord extends IRecord<any>> {
  readonly name: string;
  count(): number;
  delete(): void;
  insert(record: IRecordDetails<TRecord>): TRecord;
  insert(records: IRecordDetails<TRecord>[]): TRecord[];
  select(): TRecord[];
  update(): void;
}
