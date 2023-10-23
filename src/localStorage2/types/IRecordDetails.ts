import { IRecord } from "./IRecord";
import { IdType } from "./IdType";

/**
 * This type provides the properties of the given record type {@link T} beside the technical fields id, createdAt and changedAt.
 */
export type IRecordDetails<T extends IRecord<IdType>> = Omit<
  T,
  "id" | "createdAt" | "changedAt"
>;
