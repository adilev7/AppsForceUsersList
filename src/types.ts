import React from "react";

export type NullableString = string | null | undefined;

export type TextFieldChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface User {
  id: NullableString;
  title: NullableString;
  firstName: NullableString;
  lastName: NullableString;
  fullName: NullableString;
  picture: NullableString;
  email: NullableString;
  country: NullableString;
  city: NullableString;
  street: NullableString;
  address: NullableString;
}

export interface FetchedAPIUser {
  login: {
    uuid: string;
    [key: string]: unknown;
  };
  name: { title: string; first: string; last: string };
  picture: { medium: string; [key: string]: string };
  email: string;
  location: {
    country: string;
    city: string;
    street: { number: number; name: string };
  };
  [key: string]: unknown;
}

export type UserFormField = { label: string; key: string };

export type UserFormFields = [
  { label: "Title"; key: "title" },
  { label: "First Name"; key: "firstName" },
  { label: "Last Name"; key: "lastName" },
  { label: "Email"; key: "email" },
  { label: "Country"; key: "country" },
  { label: "City"; key: "city" },
  { label: "Street"; key: "street" }
];
