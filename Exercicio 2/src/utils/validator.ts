import { Person } from "../models/Person";

export const isValidToInclude = (person: Person): string[] => {
  const errors: string[] = [];

  if (!isValidName(person.name)) {
    errors.push("Invalid name format");
  }

  if (person.age < 1 || person.age > 200) {
    errors.push("Invalid age range");
  }

  if (person.emails.length === 0) {
    errors.push("At least one email is required");
  }

  for (const email of person.emails) {
    if (!isValidEmailFormat(email.name)) {
      errors.push("Invalid email format");
      break;
    }
  }

  return errors;
};

const isValidName = (name: string): boolean => {
  const parts = name.split(" ");
  return parts.length >= 2 && parts.every(part => /^[a-zA-Z]+$/.test(part));
};

const isValidEmailFormat = (email: string): boolean => {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
};
