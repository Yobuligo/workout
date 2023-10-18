import { IDataObject } from "../localStorage/dataObject/IDataObject";

export interface ITodo extends IDataObject {
  text: string;
}
