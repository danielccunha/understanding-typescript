function Logger(target: Function) {
  console.log(`Creating a ${target.name}`);
}

@Logger
class Person {
  public readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person('Daniel');
console.log(person);
