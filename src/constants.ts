import { User, UserFormFields } from "./types";

export const APP_NAME = 'Users Library'

export const USER_NAME_MIN_LENGTH = 3;

export const USER_EMPTY_STATE: User = {
  id: null,
  title: null,
  firstName: null,
  lastName: null,
  fullName: null,
  picture: null,
  email: null,
  country: null,
  city: null,
  street: null,
  address: null,
};

export const USER_FORM_FIELDS: UserFormFields = [
  { label: "Title", key: "title" },
  { label: "First Name", key: "firstName" },
  { label: "Last Name", key: "lastName" },
  { label: "Email", key: "email" },
  { label: "Country", key: "country" },
  { label: "City", key: "city" },
  { label: "Street", key: "street" },
];

export const USER_TITLE_OPTIONS = [
  { label: "Mr", value: "mr" },
  { label: "Miss", value: "miss" },
  { label: "Mrs", value: "mrs" },
];
