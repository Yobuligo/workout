import { readLocalStorage } from "../utils/readLocalStorage";
import { writeLocalStorage } from "../utils/writeLocalStorage";
import { IStorage } from "./IStorage";

export class LocalStorage<T> implements IStorage<T> {
  constructor(private readonly key: string) {}

  read(): T[] {
    return readLocalStorage<T[]>(this.key) ?? [];
  }

  write(items: T[]): void {
    writeLocalStorage(this.key, items);
  }
}
