import { Reason } from "../../types/Reason";
import { createError } from "./createError";

/**
 * This function is responsible for throwing an error.
 */
export const error = (reason?: Reason): never => {
  throw createError(reason);
};
