import { IStorage } from "./IStorage";
import { IStorageFactory } from "./IStorageFactory";
import { LocalStorage } from "./LocalStorage";

class StorageFactoryDefault implements IStorageFactory {
  create<T>(key: string): IStorage<T> {
    return new LocalStorage(key);
  }
}

/**
 * This service is responsible for creating instances of type {@link IStorage}.
 */
export const StorageFactory = new StorageFactoryDefault();
