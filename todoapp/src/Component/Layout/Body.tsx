import React, { useState, useEffect } from "react";
import AllTodo from "../AllTodo";
import axios from "axios";
import { Todos } from "./../InterfaceModels";

const TODOSURL = `http://localhost:4000/todos`;

const Body = () => {
  const [todos, setTodos] = useState<Todos[]>([]);

  const getTodos = async () => {
    try {
      const res = await axios.get(TODOSURL);

      return res.data.length
        ? { todos: res.data }
        : {
            error: `theres no data `,
          };
    } catch (error) {
      let errorMessage = "Failed to do something exceptional";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    const getData = async () => {
      let gettodo = await getTodos();
      console.log(gettodo);

      //this is part when you need the set the useState()
    };

    getData();
  }, []);

  return (
    <div className="container">
      <main role="main" className="inner cover">
        <div className="container">
          <AllTodo />
        </div>
      </main>
    </div>
  );
};
export default Body;
