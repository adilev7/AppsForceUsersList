import { TextFieldChangeEvent } from "@/types";
import { TextField } from "@mui/material";

type BaseInputFieldProps = {
  label?: string;
  type?: string;
  value?: string;
  isInValid?: boolean;
  errorMessage?: string;
  onChange: (e: TextFieldChangeEvent) => void;
};

const BaseInputField: React.FC<BaseInputFieldProps> = ({
  label,
  type,
  value,
  isInValid,
  errorMessage,
  onChange: changeHandler,
}) => (
  <TextField
    label={label}
    type={type || "text"}
    value={value || ""}
    error={!isInValid || false}
    helperText={errorMessage || ""}
    onChange={(e: TextFieldChangeEvent) => changeHandler(e)}
  />
);

export default BaseInputField;
