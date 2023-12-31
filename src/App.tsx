import React, { useEffect, useState } from "react";
import "./App.css";
import { TodoList } from "./feature/TodoList";
import { IDataObjectDetails } from "./localStorage/dataObject/IDataObjectDetails";
import { Database } from "./localStorage2/database/Database";
import { IRecord } from "./localStorage2/record/IRecord";
import { gt } from "./localStorage2/where/Operator";
import { ITodo } from "./model/ITodo";

interface IBoard extends IRecord<number> {
  title: string;
}

const db = new Database("retrospective");
const Board = db.define<IBoard>("boards");

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const onAdd = (todo: IDataObjectDetails<ITodo>) => {
    // const newTodo = Todo.insert(todo);
    // setTodos((previous) => [...previous, newTodo]);
    const count = Board.count();
    Board.insert({ title: "Sprint Review 2" });
    Board.insert({ title: "Sprint Review 2" });
    Board.insert({ title: "Sprint Review 2" });
    Board.insert({ title: "Sprint Review 2" });
    Board.insert({ title: "Sprint Review 2" });
    Board.insert({ title: "Sprint Review 2" });

    const boards = Board.select({ limit: 2, where: { id: gt(3) } });

    debugger;
  };

  const onDelete = (todo: ITodo) => {
    // Todo.delete(todo);
    setTodos((previous) => [
      // ...previous.filter((value) => value.id !== todo.id),
    ]);
  };

  useEffect(() => {
    // const first = Todo.first();
    // if (first) {
    //   first.text = "updated text";
    //   Todo.update(first);
    // }
  }, []);

  return (
    <>
      {/* <div>Amount: {Todo.count()}</div> */}
      <div>
        <TodoList todos={todos} onAdd={onAdd} onDelete={onDelete} />
      </div>
    </>
  );
};

export default App;
