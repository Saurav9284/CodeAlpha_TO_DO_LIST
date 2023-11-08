
import Container from "../common/container/Container";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([])
  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo])
  }
  function handleDeleteTodo(index) {
    const updatedTodos = [...todos]
    updatedTodos.splice(index, 1)
    setTodos(updatedTodos)
  }
  return (
    <Container>
      {/* You can wrap all the elements in such a way that `Container` component will act like a parent div */}
      <h1>Todo List</h1>
      {/* Add AddTodo component here */}
      <AddTodo onAddTodo={handleAddTodo}/>
      <ul>
        {/* map all the todo's here with the help of TodoItem component */}
        {todos.map((todo, index) => (
          <TodoItem key={index} todo = {todo} index={index} onDelete={handleDeleteTodo}/>
        ))}
      </ul>
    </Container>
  );
}

export default TodoList;

