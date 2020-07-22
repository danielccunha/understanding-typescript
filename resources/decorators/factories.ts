function Logger(prefix: string) {
  return function (constructor: Function) {
    console.log(`[${prefix}] Doing some logger stuff`);
  };
}

@Logger('PERSON')
class Person {
  public readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person('Daniel');
console.log(person);
