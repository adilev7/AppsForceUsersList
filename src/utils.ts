
export const compareKeysAndTypes = (
  obj1: Record<string, any>,
  obj2: Record<string, any>
): boolean => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  if (!keys1.every((key) => keys2.includes(key))) {
    return false;
  }
  return keys1.every((key) => typeof obj1[key] === typeof obj2[key]);
};

export const generateUniqueId = (): string => {
  const randomPart: string = Math.random().toString(36).slice(2, 11);
  const timestamp: string = new Date().getTime().toString(36);
  const uniqueId = randomPart + timestamp;
  return uniqueId;
};

export const defaultToEmptyStr = <T>(value: T): T | string => {
  return value || "";
};

export const getNameError = (nameField: "First" | "Last") =>
  `${nameField} name must be at least 3 characters`;

export const getEmptyFieldError = (fieldLabel: string) =>
  `${fieldLabel} field cannot be empty`;
