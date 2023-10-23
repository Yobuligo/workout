import { IdType } from "../types/IdType";
import { IRecord } from "./IRecord";

/**
 * This function returns if the given {@link value} is of type {@link IRecord}.
 */
export const isRecord = (value: any): value is IRecord<IdType> => {
  return "id" in value;
};
