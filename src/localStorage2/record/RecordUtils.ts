import { IIdGenerator } from "../idGenerator/IIdGenerator";
import { ITableConfig } from "../table/ITableConfig";
import { IdType } from "../types/IdType";
import { IRecord } from "./IRecord";

class RecordUtilsDefault {
  /**
   * Creates an instance of {@link IRecord} with an id and depended of the {@link tableConfig} also with timestamps for createdAt and changedAt.
   */
  createTechnicalProps<TIdType extends IdType>(
    idGenerator: IIdGenerator<TIdType>,
    tableConfig?: ITableConfig
  ): IRecord<TIdType> {
    const id = idGenerator.next();
    if (this.needsTimestamps(tableConfig)) {
      return { id, createdAt: new Date(), changedAt: new Date() };
    } else {
      return { id };
    }
  }

  /**
   * Returns if createdAt and changedAt should be handled for the table of the given {@link tableConfig}.
   */
  needsTimestamps(tableConfig?: ITableConfig): boolean {
    return (
      !tableConfig ||
      tableConfig.timestamps === undefined ||
      tableConfig.timestamps === true
    );
  }
}

export const RecordUtils = new RecordUtilsDefault();
