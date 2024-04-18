import { Person } from "../src/models/Person";
import { Email } from "../src/models/Email";
import { PersonDao } from "../src/dao/PersonDao";

describe("PersonDao", () => {
  let personDao: PersonDao = new PersonDao();

  beforeEach(() => {
    personDao = new PersonDao();
  });

  it("should validate a valid person", () => {
    const person = new Person(1, "John Doe", 25, [new Email(1, "john@example.com")]);
    const errors = personDao.isValidToInclude(person);
    expect(errors).toEqual([]);
  });

  it("should validate an invalid person with no name parts", () => {
    const person = new Person(1, "John", 25, [new Email(1, "john@example.com")]);
    const errors = personDao.isValidToInclude(person);
    expect(errors).toContain("Invalid name format");
  });

  it("should validate an invalid person with age out of range", () => {
    const person = new Person(1, "John Doe", 201, [new Email(1, "john@example.com")]);
    const errors = personDao.isValidToInclude(person);
    expect(errors).toContain("Invalid age range");
  });

  it("should validate an invalid person with no emails", () => {
    const person = new Person(1, "John Doe", 25);
    const errors = personDao.isValidToInclude(person);
    expect(errors).toContain("At least one email is required");
  });

  it("should validate an invalid person with invalid email format", () => {
    const person = new Person(1, "John Doe", 25, [new Email(1, "johnexample.com")]);
    const errors = personDao.isValidToInclude(person);
    expect(errors).toContain("Invalid email format");
  });
});
