import React, { useState, useEffect } from "react";

import Typography from "@material-ui/core/Typography";

import { useTodoState } from "../hooks";

import TodoList from "./Todo/List";
import TodoInputForm from "./Todo/InputForm";

import "./styles.css";

export default () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div className="container">
      <Typography component="h1" variant="h2">
        {isLoading ? "Now Loading..." : "Todos"}
      </Typography>

      <TodoInputForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) addTodo(trimmedText);
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};
