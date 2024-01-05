import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  DialogActions,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";

import BaseModal from "../../base/BaseModal";

import { addUser, updateUser } from "@/store/usersSlice";
import { closeModal } from "@/store/modalSlice";

import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  USER_EMPTY_STATE,
  USER_FORM_FIELDS,
  USER_NAME_MIN_LENGTH,
  USER_TITLE_OPTIONS,
} from "@/constants";
import {
  NullableString,
  TextFieldChangeEvent,
  User,
  UserFormField,
} from "@/types";
import { getEmptyFieldError, getNameError } from "@/utils";

const UserFormModal = () => {
  const dispatch = useAppDispatch();

  const user: User = useAppSelector((state) => {
    return state.userForm.user;
  });

  const allUsers: User[] = useAppSelector((state) => {
    return state.users.users;
  });

  const [userForm, setUserForm] = useState<User>(USER_EMPTY_STATE);
  // const [userTitle, setUserTitle] = useState<string>(
  //   USER_TITLE_OPTIONS[0].value
  // );
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formHasChanged, setFormHasChanged] = useState(false);

  useEffect(() => {
    setUserForm(user);
  }, [user]);

  const isNewUser = !user.id;

  const formActionTxt = `${isNewUser ? "Create New" : "Update"} User`;

  const validateField = (value: NullableString): boolean => {
    return !!value;
  };

  const validateName = (name: NullableString) => {
    return name ? name.length >= USER_NAME_MIN_LENGTH : false;
  };

  const validateEmail = (email: NullableString): boolean => {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkEmailUnique = (email: NullableString): boolean => {
    if (!email) return false;
    return allUsers.every((u) => u.id === userForm.id || u.email !== email);
  };

  const validateForm = (): boolean => {
    const { firstName, lastName, email, country, city, street } = userForm;
    const firstNameIsValid: boolean = validateName(firstName);
    const lastNameIsValid: boolean = validateName(lastName);
    const countryIsValid: boolean = validateField(country);
    const cityIsValid: boolean = validateField(city);
    const streetIsValid: boolean = validateField(street);
    const emailIsValid: boolean = validateEmail(email);
    const emailIsUnique: boolean = checkEmailUnique(email);

    setFormErrors({
      firstName: firstNameIsValid ? "" : getNameError("First"),
      lastName: lastNameIsValid ? "" : getNameError("Last"),
      email: emailIsValid
        ? emailIsUnique
          ? ""
          : "Email is not unique"
        : "Invalid email",
      country: countryIsValid ? "" : getEmptyFieldError("Country"),
      city: cityIsValid ? "" : getEmptyFieldError("City"),
      street: streetIsValid ? "" : getEmptyFieldError("Street"),
    });

    return (
      firstNameIsValid &&
      lastNameIsValid &&
      countryIsValid &&
      cityIsValid &&
      streetIsValid &&
      emailIsValid &&
      emailIsUnique
    );
  };

  const UserTitleSelect: React.FC = () => (
    <FormControl fullWidth>
      <InputLabel variant="outlined">Title</InputLabel>
      <Select
        value={userForm.title}
        label="Title"
        onChange={(e: SelectChangeEvent) => inputChangeHandler(e, "title")}
      >
        {USER_TITLE_OPTIONS.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  const UserTextField: React.FC<{ field: UserFormField }> = ({ field }) => (
    <TextField
      key={field.key}
      label={field.label}
      type={field.key === "email" ? "email" : "text"}
      value={userForm[field.key] || ""}
      error={!!formErrors[field.key]}
      helperText={formErrors[field.key]}
      onChange={(e: TextFieldChangeEvent) => inputChangeHandler(e, field.key)}
    />
  );

  const inputChangeHandler = (
    e: TextFieldChangeEvent | SelectChangeEvent,
    key: string
  ) => {
    setFormHasChanged(true);
    setUserForm((state) => ({ ...state, [key]: e.target.value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [key]: "" }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formIsValid = validateForm();
    if (formHasChanged && formIsValid) {
      if (isNewUser) {
        dispatch(addUser(userForm));
      } else {
        dispatch(updateUser(userForm));
      }
      dispatch(closeModal());
    }
  };

  return (
    <div className="UserFormModal">
      <BaseModal title={formActionTxt}>
        <Box
          component="form"
          className="form"
          autoComplete="off"
          noValidate
          onSubmit={submitHandler}
          sx={{ padding: 5 }}
        >
          <Stack gap={3}>
            {USER_FORM_FIELDS.map((field) =>
              field.key === "title" ? (
                <UserTitleSelect />
              ) : (
                <UserTextField field={field} />
              )
            )}
          </Stack>
          <DialogActions>
            <Button onClick={() => dispatch(closeModal())}>Cancel</Button>
            <Button type="submit" disabled={!formHasChanged}>
              {formActionTxt}
            </Button>
          </DialogActions>
        </Box>
      </BaseModal>
    </div>
  );
};

export default UserFormModal;
