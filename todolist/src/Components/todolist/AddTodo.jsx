import styles from "./AddTodo.module.css";
import Button from "../common/button/Button";

import { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [task, setTask] = useState("")
  const handleAdd = () => {
    onAddTodo(task)
    setTask("")
  }
  return (
    <div>
      {/* Add a input tag here and a button to "ADD" with the help of `Button` component */}
      <input placeholder="Add a new todo" className={styles.input} onInput={(e) => setTask(e.target.value)} value={task}/>
      <Button onClick={() => {handleAdd()}}>ADD</Button>
    </div>
  );
}

export default AddTodo;
