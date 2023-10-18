import { useState } from "react";
import { IDataObjectDetails } from "../localStorage/dataObject/IDataObjectDetails";
import { ITodo } from "../model/ITodo";
import { Todo } from "./Todo";

export const TodoList: React.FC<{
  todos: ITodo[];
  onAdd: (todo: IDataObjectDetails<ITodo>) => void;
  onDelete: (todo: ITodo) => void;
}> = (props) => {
  const [text, setText] = useState("");

  const items = props.todos.map((todo) => (
    <div>
      <Todo todo={todo} onDelete={props.onDelete} />
    </div>
  ));
  return (
    <>
      <div>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button onClick={() => props.onAdd({ text })}>Add</button>
      </div>
      <div>{items}</div>
    </>
  );
};
