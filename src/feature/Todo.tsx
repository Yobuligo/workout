import { ITodo } from "../model/ITodo";

export const Todo: React.FC<{
  todo: ITodo;
  onDelete: (todo: ITodo) => void;
}> = (props) => {
  return (
    <>
      <div>
        {props.todo.text} ({props.todo.id})
      </div>
      <div>
        <button onClick={() => props.onDelete(props.todo)}>delete</button>
      </div>
    </>
  );
};
