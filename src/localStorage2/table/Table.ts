import { IIdGenerator } from "../idGenerator/IIdGenerator";
import { IRecord } from "../record/IRecord";
import { IRecordDetails } from "../record/IRecordDetails";
import { RecordUtils } from "../record/RecordUtils";
import { IStorage } from "../storage/IStorage";
import { IdType } from "../types/IdType";
import { ITable } from "./ITable";
import { ITableConfig } from "./ITableConfig";

export class Table<TRecord extends IRecord<IdType>> implements ITable<TRecord> {
  constructor(
    readonly name: string,
    private readonly tableConfig: ITableConfig,
    private readonly storage: IStorage<TRecord>,
    private readonly idGenerator: IIdGenerator<IdType>
  ) {}

  count(): number {
    const records = this.select();
    return records.length;
  }

  delete(): void {
    this.storage.write([]);
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

  select(): TRecord[] {
    return this.storage.read();
  }

  update(): void {
    throw new Error("Method not implemented.");
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
