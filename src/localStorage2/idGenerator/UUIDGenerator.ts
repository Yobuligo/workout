import { v4 as uuid } from "uuid";
import { IIdGenerator } from "./IIdGenerator";

export class UUIDGenerator implements IIdGenerator<string> {
  next(): string {
    return uuid();
  }
}
