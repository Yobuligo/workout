import { error } from "../../utils/error/error";
import { IFilter } from "./IFilter";

export const filterItems = <T>(items: T[], filter: IFilter<T>): T[] => {
  return items.filter((item) => doesFitFilter(item, filter));
};

const doesFitFilter = <T>(item: T, filter: IFilter<T>): boolean => {
  for (const key in filter) {
    const predicate = filter[key] ?? error();
    if (!predicate(item[key])) {
      return false;
    }
  }

  return true;
};
