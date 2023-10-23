import { IFilter } from "../filter/IFilter";
import { IIdGenerator } from "../idGenerator/IIdGenerator";
import { IRecord } from "../record/IRecord";
import { IRecordDetails } from "../record/IRecordDetails";
import { RecordUtils } from "../record/RecordUtils";
import { IStorage } from "../storage/IStorage";
import { IdType } from "../types/IdType";
import { ITable } from "./ITable";
import { ITableConfig } from "./ITableConfig";

/**
 * This class represents each type of table.
 * A table is required to write data into, read or delete data from it.
 */
export class Table<TRecord extends IRecord<IdType>> implements ITable<TRecord> {
  constructor(
    readonly name: string,
    private readonly storage: IStorage<TRecord>,
    private readonly idGenerator: IIdGenerator<IdType>,
    private readonly tableConfig?: ITableConfig
  ) {}

  count(): number {
    const records = this.select();
    return records.length;
  }

  delete(filter?: IFilter<TRecord> | undefined): void {
    if (!filter) {
      this.storage.write([]);
      return;
    }

    let records = this.select();
    const length = records.length;
    if (length > 0) {
      records = RecordUtils.reduceRecords(records, filter);
      this.storage.write(records);
    }
  }

  insert(record: IRecordDetails<TRecord>): TRecord;
  insert(records: IRecordDetails<TRecord>[]): TRecord[];
  insert(records: unknown): TRecord | TRecord[] {
    if (Array.isArray(records)) {
      return this.insertRecords(records as IRecordDetails<TRecord>[]);
    } else {
      return this.insertRecord(records as IRecordDetails<TRecord>);
    }
  }

  select(filter?: IFilter<TRecord> | undefined): TRecord[] {
    let records = this.storage.read();
    if (filter) {
      records = RecordUtils.filterItems(records, filter);
    }
    return records;
  }

  selectSingle(filter?: IFilter<TRecord> | undefined): TRecord | undefined {
    return this.select(filter)[0];
  }

  update(
    record: Partial<IRecordDetails<TRecord>>,
    filter?: IFilter<TRecord> | undefined
  ): number {
    let count = 0;
    const records = this.select();
    records.forEach((updateRecord) => {
      if (!filter || RecordUtils.doesMatchFilter(updateRecord, filter)) {
        if (RecordUtils.updateItem(updateRecord, record, this.tableConfig)) {
          count++;
        }
      }
    });
    this.storage.write(records);
    return count;
  }

  private insertRecords(recordDetails: IRecordDetails<TRecord>[]): TRecord[] {
    const newRecords: TRecord[] = [];
    recordDetails.forEach((recordDetails) => {
      const newRecord = this.createRecord(recordDetails);
      newRecords.push(newRecord);
    });
    this.storage.append(newRecords);
    return newRecords;
  }

  private insertRecord(recordDetails: IRecordDetails<TRecord>): TRecord {
    const newRecord = this.createRecord(recordDetails);
    this.storage.append(newRecord);
    return newRecord;
  }

  private createTechnicalProps(): IRecord<IdType> {
    return RecordUtils.createTechnicalProps(this.idGenerator, this.tableConfig);
  }

  private createRecord(recordDetails: IRecordDetails<TRecord>): TRecord {
    const technicalProps = this.createTechnicalProps();
    return { ...recordDetails, ...technicalProps } as TRecord;
  }
}
