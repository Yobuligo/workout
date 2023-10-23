import { IRecord } from "../types/IRecord";
import { IdType } from "../types/IdType";
import { ITable } from "./ITable";

export class Table<TRecord extends IRecord<IdType>> implements ITable<TRecord> {
  constructor(readonly name: string) {}

  count(): number {
    throw new Error("Method not implemented.");
  }

  delete(): boolean {
    throw new Error("Method not implemented.");
  }

  insert(row: TRecord): void {
    throw new Error("Method not implemented.");
  }

  select(): TRecord[] {
    throw new Error("Method not implemented.");
  }

  update(): void {
    throw new Error("Method not implemented.");
  }
}
