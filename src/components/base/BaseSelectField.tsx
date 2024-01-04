import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

type BaseSelectFieldProps = React.PropsWithChildren & {
  label: string;
  value: string;
  onChange: (e: SelectChangeEvent) => void;
};

const BaseSelectField: React.FC<BaseSelectFieldProps> = ({
  value,
  label,
  onChange: changeHandler,
  children,
}) => (
  <FormControl fullWidth>
    <InputLabel variant="outlined">Title</InputLabel>
    <Select
      value={value}
      label={label}
      onChange={(e: SelectChangeEvent) => changeHandler(e)}
    >
      {children}
    </Select>
  </FormControl>
);

export default BaseSelectField;