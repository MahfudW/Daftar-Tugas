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
    localStorage.setItem("todos", JSON.stringify(todos)); // ✅ Ubah dari "todo" jadi "todos"
  }, [todos]);

  const addTodo = (newTodo) => {
    if (!newTodo.trim()) return;
    const updatedTodos = [...todos, { text: newTodo, completed: false}];
    setTodos(updatedTodos);
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed} : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <Header />
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </>
  );
}

export default App;
