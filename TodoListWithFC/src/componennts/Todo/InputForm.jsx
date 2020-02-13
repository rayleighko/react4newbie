import React from "react";

import TextField from "@material-ui/core/TextField";

export default () => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
      }}
    >
      <TextField variant="outlined" placeholder="Add todo" margin="normal" />
    </form>
  );
};
