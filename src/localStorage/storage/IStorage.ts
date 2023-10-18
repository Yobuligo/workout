export interface IStorage<T> {
  read(): T[];
  write(items: T[]): void;
}
