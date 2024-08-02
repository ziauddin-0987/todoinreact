import React, { useState } from "react";
// import { Button } from "antd";
import { Button, Input, Flex } from "antd";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
     <div className="inputWithButton">
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new to-do"
        />
        ;
        <Button type="primary" onClick={handleAddTodo}>
          add to-do
        </Button>
        </div>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <Button onClick={() => handleDeleteTodo(index)}>Delete</Button>
          </li>
   
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
