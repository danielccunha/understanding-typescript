interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, property: string) {
  registeredValidators[target.constructor.name] = {
    [property]: ['required'],
  };
}

function PositiveNumber(target: any, property: string) {
  registeredValidators[target.constructor.name] = {
    [property]: ['positive'],
  };
}

function validate(obj: any) {
  const validators = registeredValidators[obj.constructor.name];
  if (!validators) {
    return true;
  }

  let isValid = true;
  for (const property in validators) {
    for (const validator of validators[property]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[property];
          break;
        case 'positive':
          isValid = isValid && obj[property] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Course {
  @Required
  title: string;

  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const course = new Course('JavaScript', 100);
console.log('Testing', validate(course));
