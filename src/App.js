import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import Actions from "./components/Actions";
import ToDo from "./components/ToDo";
import Footer from "./components/Footer";
import TASKS from "./components/ToDo/todos";

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || TASKS);
  const [inputTodo, setInputTodo] = useState("");
  const [filter, setFilter] = useState("All");
  const [deletedTodos, setDeletedTodos] = useState(JSON.parse(localStorage.getItem("deletedTodos")) || []);

  //localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("deletedTodos", JSON.stringify(deletedTodos));
  }, [todos, deletedTodos]);

  //Add tasks
  const handleAddTask = () => {
    if (inputTodo.trim() !== "") {
      setTodos([...todos, {
        task: inputTodo, 
        id: Date.now().toString(),
        isCompleted: false,
        isInTrash: false
      }]);
      setInputTodo("");
    }
  };

  //Implement delete feature
  const handleDeleteTask = (deletedTodoId) => {
    const restTodos = todos.filter((todo) => todo.id !== deletedTodoId);
    const deletedTodo = todos.find((todo) => todo.id === deletedTodoId);
    deletedTodo.isInTrash = true;
    setTodos(restTodos);
    setDeletedTodos([...deletedTodos, deletedTodo]);
  };

  // Delete forever
  const handleDeleteForever = (deletedTodoId) => {
    const restDeletedTodos = deletedTodos.filter((todo) => todo.id !== deletedTodoId);
    setDeletedTodos(restDeletedTodos);
  };

  // Filter completed and uncompleted tasks
  const toggleCompleteTask = (taskId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === taskId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo;
    })
    setTodos(newTodos);
  };

  const handleFilter = () => {
    if (filter === "To Do") {
      return todos.filter((todo) => todo.isCompleted === false && todo.isInTrash === false)
    } else if (filter === "Done") {
      return todos.filter((todo) => todo.isCompleted === true && todo.isInTrash === false)
    } else if (filter === "Trash") {
      return deletedTodos;
    } else {
      return todos;
    }
  };

  //Restore deleted tasks
  const handleRestoreTask = (restoredTodoId) => {
    const restoredTodo = deletedTodos.find(
      (todo) => todo.id === restoredTodoId
    );
    const restDeletedTodos = deletedTodos.filter(
      (todo) => todo.id !== restoredTodoId
    );
    restoredTodo.isInTrash = false;
    setDeletedTodos(restDeletedTodos);
    setTodos([...todos, restoredTodo]);
  };

  return (
    <div className="App">
      <Header />
      <Actions 
      setFilter={setFilter}
      setInputTodo={setInputTodo}
      inputTodo={inputTodo}
      handleAddTask={handleAddTask}
      />
      <ToDo 
      handleDeleteForever={handleDeleteForever}
      toggleCompleteTask={toggleCompleteTask}
      handleDeleteTask={handleDeleteTask}
      handleRestoreTask={handleRestoreTask}
      handleFilter={handleFilter}
      filter={filter}
      />
      <Footer />
    </div>
  );
}

export default App;
