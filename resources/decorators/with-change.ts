function Logger(prefix: string) {
  return function (constructor: Function) {
    console.log(`[${prefix}] Doing some logger stuff`);
  };
}

function WithTemplate(template: string) {
  return function <T extends { new (...args: any[]): {} }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super(...args);
        console.log(`Rendering template: { template: ${template} }`);
      }
    };
  };
}

@Logger('PERSON')
@WithTemplate('<h1>Hey there</h1>')
class Person {
  public readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person('Daniel');
console.log(person);
