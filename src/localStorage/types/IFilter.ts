export type IFilter<T> = { [P in keyof T]?: T[P] };
