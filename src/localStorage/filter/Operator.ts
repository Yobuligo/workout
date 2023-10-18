import { Todo } from "../utils/Todo";
import { IPredicate } from "./IPredicate";

export function eq<T>(value: T): IPredicate<T> {
  return ()=>{};
}

export function gt<T>(value: T): IPredicate<T> {
  return Todo();
}

export function ge<T>(value: T): IPredicate<T> {
  return Todo();
}

export function lt<T>(value: T): IPredicate<T> {
  return Todo();
}

export function le<T>(value: T): IPredicate<T> {
  return Todo();
}

export function not<T>(value: T): IPredicate<T> {
  return Todo();
}
