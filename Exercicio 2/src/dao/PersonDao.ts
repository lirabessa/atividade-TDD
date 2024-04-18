import { Person } from "../models/Person";
import { isValidToInclude } from "../utils/validator";

export class PersonDao {
  save(person: Person): void {
    const errors = isValidToInclude(person);
    if (errors.length > 0) {
      throw new Error(`Invalid person data: ${errors.join(", ")}`);
    }
    // Implement save logic here
  }

  isValidToInclude(person: Person): string[] {
    return isValidToInclude(person);
  }
}
