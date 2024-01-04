const BaseInputField: React.FC<{ field: UserFormField }> = ({ field }) => (
  <TextField
    label={label}
    type={type}
    value={userForm[field.key] || ""}
    error={!!formErrors[field.key]}
    helperText={formErrors[field.key]}
    onChange={(e: TextFieldChangeEvent) => inputChangeHandler(e, field.key)}
  />
);