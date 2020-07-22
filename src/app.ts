function Logger(prefix: string) {
  return function (constructor: Function) {
    console.log(`[${prefix}] Doing some logger stuff`);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (_constructor: Function) {
    console.log(
      `Rendering template: { template: ${template}, hookId: ${hookId}}`
    );
  };
}

@Logger('PERSON')
@WithTemplate('<h1>Hey there</h1>', 'app')
class Person {
  public readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person('Daniel');
console.log(person);
