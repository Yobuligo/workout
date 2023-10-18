import React, { useEffect } from "react";
import "./App.css";
import { IDataObject } from "./localStorage/dataObject/IDataObject";
import { Database } from "./localStorage/database/Database";
import { eq, gt } from "./localStorage/filter/Operator";
import { IPerson } from "./localStorage/localStorage";

interface ICar extends IDataObject {
  name: string;
  power: number;
}

const App: React.FC = () => {
  useEffect(() => {
    const db = new Database("retrospective2");
    const Person = db.define<IPerson>("/users");
    let data = Person.findAll();
    Person.deleteAll({ firstname: eq("Peter"), id: gt(6) });
    // Person.insert({ age: 28, firstname: "Stacey", lastname: "Starfish" });
    // data = Person.findAll();
    // data = Person.findAll({ firstname: eq("Peter") });
    // Person.insert({ age: 28, firstname: "Alex", lastname: "Ant" });
    // data = Person.findAll();
    debugger;
    // Car.insert({ name: "BMW", power: 200 });
  }, []);

  return <>Hello World</>;
};

export default App;
