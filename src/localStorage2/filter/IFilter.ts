import { IPredicate } from "./IPredicate";

/**
 * This type represents a filter for the given type {@link T}.
 */
export type IFilter<T> = { [P in keyof T]?: IPredicate<T[P]> };
