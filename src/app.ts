// Function interface (interesting but weird)
interface AddFn {
  (a: number, b: number): number;
}

const add: AddFn = (a: number, b: number) => a + b;

// Simple definition of an interface
interface Named {
  readonly name: string;
}

// Interface composition through inheritance
interface Greetable extends Named {
  greet(phrase: string): void;
}

// Instance of a person using an object
const person: Greetable = {
  name: 'Daniel',
  greet(phrase: string) {},
};

// Create a Student class that extends from person
class Student implements Greetable {
  constructor(public name: string, public course: string) {}

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

const student = new Student('Daniel', 'Computer Science');
student.greet("Hey there, I'm");
