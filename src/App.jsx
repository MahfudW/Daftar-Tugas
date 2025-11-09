import { useEffect, useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  // Langsung inisialisasi state dengan data dari localStore
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // simpan ke localStorage setiap kali todos berubah
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    if (!newTodo.trim()) return;
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <Header />
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
