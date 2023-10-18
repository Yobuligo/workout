import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./feature/TodoList";
import { IDataObjectDetails } from "./localStorage/dataObject/IDataObjectDetails";
import { Database } from "./localStorage/database/Database";
import { ITodo } from "./model/ITodo";

const db = new Database("todos");
const Todo = db.define<ITodo>("todos");


const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(Todo.findAll());

  const onAdd = (todo: IDataObjectDetails<ITodo>) => {
    const newTodo = Todo.insert(todo);
    setTodos((previous) => [...previous, newTodo]);
  };

  const onDelete = (todo: ITodo) => {
    Todo.delete(todo);
    setTodos((previous) => [
      ...previous.filter((value) => value.id !== todo.id),
    ]);
  };

  return (
    <>
      <TodoList todos={todos} onAdd={onAdd} onDelete={onDelete} />
    </>
  );
};

export default App;
