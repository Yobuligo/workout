import { Difficulty } from "../types/Difficulty";
import { IHaveName } from "../types/IHaveName";
import { IBodyPart } from "./IBodyPart";
import { IDevice } from "./IDevice";

/**
 * An implementation of this interface represents any kind of exercise.
 */
export interface IExercise extends IHaveName {
  /**
   * Returns the {@link IBodyPart}s, which are trained with that exercise
   */
  bodyParts: IBodyPart[];

  /**
   * Returns the {@link IDevice}s, which are needed for doing this exercise
   */
  devices: IDevice[];

  /**
   * Returns the {@link Difficulty} level of this exercise
   */
  difficulty: Difficulty;
}
