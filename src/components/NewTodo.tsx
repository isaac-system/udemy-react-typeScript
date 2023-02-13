import { useContext, useRef } from "react";

import classes from "./NewTodo.module.css";

import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todoCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="todoText">Todo text</label>
      <input id="todoText" type="text" ref={todoTextInputRef} />
      <button>ADD TODO</button>
    </form>
  );
};

export default NewTodo;
