import { IFilter } from "../filter/IFilter";
import { IRecord } from "../record/IRecord";
import { IRecordDetails } from "../record/IRecordDetails";
import { IUpdateResult } from "./IUpdateResult";

/**
 * An implementation of this interface represents a table which can have data of type {@link TRecord}.
 */
export interface ITable<TRecord extends IRecord<any>> {
  readonly name: string;
  count(): number;
  delete(filter?: IFilter<TRecord>): void;
  insert(record: IRecordDetails<TRecord>): TRecord;
  insert(records: IRecordDetails<TRecord>[]): TRecord[];
  modify(record: IRecordDetails<TRecord>, filter?: IFilter<TRecord>): number;
  select(filter?: IFilter<TRecord>): TRecord[];
  selectSingle(filter?: IFilter<TRecord>): TRecord | undefined;
  update(
    record: Partial<IRecordDetails<TRecord>>,
    filter?: IFilter<TRecord>
  ): IUpdateResult;
}
