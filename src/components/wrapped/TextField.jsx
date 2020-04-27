// @flow
import React from "react";
import { FormHelperText, TextField } from "@material-ui/core";
import { isEqual } from "lodash";

type FieldProps = {
  input: Object,
  label: string,
  meta: Object,
  meta: Object,
  custom: Object,
  noPaste: boolean,
  value: string,
  onChangeValue: Function,
};

const RenderedTextField = ({
  input,
  value,
  label,
  meta: { touched, error },
  noPaste,
  onChangeValue,
  ...custom
}: FieldProps) => (
  <div>
    <TextField
      label={label}
      margin="dense"
      fullWidth
      error={touched && !!error}
      variant="outlined"
      value={value}
      {...input}
      {...custom}
      onChange={(e) => {
        if (noPaste && isEqual(e.nativeEvent.inputType, "insertFromPaste")) {
          e.target.value = "";
        } else {
          input.onChange(e);
        }
      }}
    />
    {touched && !!error ? (
      <FormHelperText error={touched && !!error}>{error}</FormHelperText>
    ) : null}
  </div>
);

export default RenderedTextField;
