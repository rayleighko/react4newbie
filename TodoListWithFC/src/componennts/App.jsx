import React from "react";

import Typography from "@material-ui/core/Typography";

import TodoList from "./Todo/List";
import TodoInputForm from "./Todo/InputForm";

import "./styles.css";

import todos from "../constants/todos";

export default () => {
  return (
    <div className="container">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoInputForm />
      <TodoList todos={todos} />
    </div>
  );
};
