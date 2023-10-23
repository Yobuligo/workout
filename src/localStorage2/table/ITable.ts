import { IRecord } from "../types/IRecord";

/**
 * An implementation of this interface represents a table.
 */
export interface ITable<TRecord extends IRecord<any>> {
  readonly name: string;
  count(): number;
  delete(): void;
  insert(row: TRecord): void;
  select(): TRecord[];
  update(): void;
}
