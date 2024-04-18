import { Email } from "./Email";

export class Person {
  id: number;
  name: string;
  age: number;
  emails: Email[];

  constructor(id: number, name: string, age: number, emails: Email[] = []) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.emails = emails;
  }
}
