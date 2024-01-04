import { DynamicComponentType } from "./types";

export const generateUniqueId = (): string => {
  const randomPart: string = Math.random().toString(36).slice(2, 11);
  const timestamp: string = new Date().getTime().toString(36);
  const uniqueId = randomPart + timestamp;
  return uniqueId;
};

export const getNameError = (nameField: "First" | "Last") =>
  `${nameField} name must be at least 3 characters`;

export const getEmptyFieldError = (fieldLabel: string) =>
  `${fieldLabel} field cannot be empty`;

export const DynamicComponent: DynamicComponentType = ({
  component: Component,
  ...rest
}) => <Component {...rest} />;
