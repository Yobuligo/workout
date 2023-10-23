import { IStorage } from "./../../localStorage/storage/IStorage";

/**
 * An implementation of this interface is responsible for creating instances of {@link IStorage}.
 */
export interface IStorageFactory {
  create<T>(key: string): IStorage<T>;
}
