import { eq } from "../where/Operator";
import { MetaTable } from "../table/MetaTable";
import { IAutoIncrement } from "./IAutoIncrement";

export class AutoIncrement implements IAutoIncrement {
  private value: number = 0;

  constructor(
    private readonly metaTable: MetaTable,
    private readonly tableName: string
  ) {
    this.value = this.readAutoIncrement();
  }

  next(): number {
    this.value++;
    this.modifyAutoIncrement();
    return this.value;
  }

  private readAutoIncrement(): number {
    const tableMeta = this.metaTable.selectSingle({
      tableName: eq(this.tableName),
    });
    return tableMeta?.autoIncrement ?? 0;
  }

  private modifyAutoIncrement() {
    this.metaTable.modify(
      {
        autoIncrement: this.value,
        tableName: this.tableName,
      },
      { tableName: eq(this.tableName) }
    );
  }
}
