// Simple enum definition. It's also possible to assign values to enum properties
enum Gender {
  male,
  female,
  unknown,
  other,
}

// Type aliases or custom types
type Country = 'brazil' | 'other';

// Simple type definition
type Person = {
  name: string;
  age: number | string;
  hobbies: string[];
  role: [number, string];
  gender: Gender;
  country: Country;
};

// TypeScript infer the type of the object, so it's not a good practice to manually define it in this cases
const person: Person = {
  name: 'Daniel',
  age: 22,
  hobbies: ['Cooking', 'Running'],
  role: [1, 'Developer'],
  gender: Gender.male,
  country: 'brazil',
};

console.log(person);
