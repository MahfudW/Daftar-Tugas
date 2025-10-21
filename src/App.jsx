import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos]= useState([]);

  const addTodo = (newTodo) => {
    if (!newTodo.trim()) return;

    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <Header />
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} />
    </>
  );
};

export default App;