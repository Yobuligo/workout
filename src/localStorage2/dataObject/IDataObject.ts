import { IRecord } from "../record/IRecord";
import { IdType } from "../types/IdType";

/**
 * An implementation of this interface represents a data object which refers to a specific entity.
 * E.g. Person might be a data object type.
 */
export interface IDataObject<T extends IdType> extends IRecord<T> {}
