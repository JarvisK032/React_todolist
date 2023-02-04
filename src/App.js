import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodo] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>My To Do List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodo={setTodo}
        setInputText={setInputText}
      />
      <TodoList setTodo={setTodo} todos={todos} />
    </div>
  );
}

export default App;
