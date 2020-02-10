import React from "react";
import Typography from "@material-ui/core/Typography";

import { useTodoState } from "../hooks";

import TodoList from "./Todo/List";
import TodoInputForm from "./Todo/InputForm";

import "./styles.css";

export default () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="container">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TodoInputForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};
