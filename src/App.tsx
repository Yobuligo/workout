import React, { useEffect } from "react";
import "./App.css";
import { Database } from "./localStorage/database/Database";
import { IPerson } from "./localStorage/localStorage";

const App: React.FC = () => {
  useEffect(() => {    const db = new Database("retrospective");
    const Person = db.create<IPerson>("/users");
    const data = Person.findAll();
    const person = Person.insert({
      age: 123,
      firstname: "Stacey",
      lastname: "Starfish",
    });
    const persons = Person.findAll();
  }, []);

  return <>Hello World</>;
};

export default App;
