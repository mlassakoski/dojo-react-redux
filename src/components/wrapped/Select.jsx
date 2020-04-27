// @flow
import React from "react";
import { FormHelperText, TextField } from "@material-ui/core";

type FieldProps = {
  input: Object,
  label: string,
  meta: Object,
  meta: Object,
  custom: Object,
  children: Node,
  value: string
};

const RenderedSelect = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}: FieldProps) => (
  <div>
    <TextField
      select
      fullWidth
      label={label}
      margin="dense"
      error={touched && !!error}
      variant="outlined"
      {...input}
      {...custom}
    >
      {children}
    </TextField>
    {touched && !!error ? (
      <FormHelperText error={touched && !!error}>{error}</FormHelperText>
    ) : null}
  </div>
);

export default RenderedSelect;
