import { IFilter } from "../filter/IFilter";
import { IRecord } from "../record/IRecord";
import { IRecordDetails } from "../record/IRecordDetails";

/**
 * An implementation of this interface represents a table which can have data of type {@link TRecord}.
 */
export interface ITable<TRecord extends IRecord<any>> {
  readonly name: string;
  count(): number;
  delete(filter?: IFilter<TRecord>): void;
  insert(record: IRecordDetails<TRecord>): TRecord;
  insert(records: IRecordDetails<TRecord>[]): TRecord[];
  select(filter?: IFilter<TRecord>): TRecord[];
  update(
    record: Partial<IRecordDetails<TRecord>>,
    filter?: IFilter<TRecord>
  ): number;
}
