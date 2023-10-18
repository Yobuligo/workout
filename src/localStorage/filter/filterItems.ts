import { error } from "../../utils/error/error";
import { IDataObject } from "../dataObject/IDataObject";
import { IFilter } from "./IFilter";

export const filterItems = <T>(items: T[], filter: IFilter<T>): T[] => {
  return items.filter((item) => doesMatchFilter(item, filter));
};

export const reduceItems = <T>(items: T[], filter: IFilter<T>): T[] => {
  return items.filter((item) => !doesMatchFilter(item, filter));
};

export const deleteItems = <T extends IDataObject>(
  items: T[],
  deleteItems: T[]
) => {
  return items.filter(
    (item) => !deleteItems.find((deleteItem) => deleteItem.id === item.id)
  );
};

export const updateItem = <T>(item: T, origin: T): boolean => {
  let updated = false;
  for (const prop in origin) {
    if (item[prop] !== origin[prop]) {
      item[prop] = origin[prop];
      updated = true;
    }
  }
  return updated;
};

export const doesMatchFilter = <T>(item: T, filter: IFilter<T>): boolean => {
  for (const key in filter) {
    const predicate = filter[key] ?? error();
    if (!predicate(item[key])) {
      return false;
    }
  }
  return true;
};
