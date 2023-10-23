import { IStorage } from "../storage/IStorage";
import { IRecord } from "../types/IRecord";
import { IdType } from "../types/IdType";
import { ITable } from "./ITable";

export class Table<TRecord extends IRecord<IdType>> implements ITable<TRecord> {
  constructor(
    readonly name: string,
    private readonly storage: IStorage<TRecord>
  ) {}

  count(): number {
    const items = this.select();
    return items.length;
  }

  delete(): void {
    this.storage.write([]);
  }

  insert(row: TRecord): void {

  }

  select(): TRecord[] {
    return this.storage.read();
  }

  update(): void {
    throw new Error("Method not implemented.");
  }
}
