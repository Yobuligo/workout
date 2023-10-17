import React, { useEffect } from "react";
import "./App.css";
import { IDataObject } from "./localStorage/dataObject/IDataObject";
import { Database } from "./localStorage/database/Database";
import { IPerson } from "./localStorage/localStorage";

interface ICar extends IDataObject {
  name: string;
  power: number;
}

const App: React.FC = () => {
  useEffect(() => {
    const db = new Database("retrospective2");
    const Person = db.create<IPerson>("/users");
    const data = Person.findAll();
    // const person = Person.insert({
    //   age: 123,
    //   firstname: "Stacey",
    //   lastname: "Starfish",
    // });
    // const persons = Person.findAll();
    const Car = db.create<ICar>("cars");
    const cars = Car.findAll();
    debugger;
    // Car.insert({ name: "BMW", power: 200 });
  }, []);

  return <>Hello World</>;
};

export default App;
