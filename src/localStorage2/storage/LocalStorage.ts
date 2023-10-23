import { deleteLocalStorage } from "../utils/deleteLocalStorage";
import { readLocalStorage } from "../utils/readLocalStorage";
import { writeLocalStorage } from "../utils/writeLocalStorage";
import { IStorage } from "./IStorage";

export class LocalStorage<T> implements IStorage<T> {
  constructor(private readonly key: string) {}

  delete(): void {
    deleteLocalStorage(this.key);
  }

  read(): T[] {
    return readLocalStorage(this.key) ?? [];
  }

  write(items: T[]): void {
    writeLocalStorage(this.key, items);
  }
}
