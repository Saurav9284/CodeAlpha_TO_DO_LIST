import Button from "../common/button/Button";
import styles from "./TodoItem.module.css";

import { useState } from "react";

function TodoItem({todo, index, onDelete}) {
  const [status, setStatus] = useState(false)

  const handleStatus = () => {
    setStatus(!status)
  }
  const handleDelete = () => {
    onDelete(index)
  }
  return (
    <div data-testid="todo-item" className={styles.wrapper}>
      {/* Add the p tag, and required elements */}
      <p>{todo}-{status ? "Completed" : "Not Completed"}</p>
      <div>{/* add the required buttons here using Button component */}
      <Button onClick={handleStatus}>TOGGLE</Button>
      <Button onClick={handleDelete}>DELETE</Button>
      </div>
    </div>
  );
}

export default TodoItem;

