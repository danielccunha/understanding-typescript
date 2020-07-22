function Property(target: any, propertyName: string) {
  console.log('Property decorator');
  console.log(target, propertyName);
}

function Accessor(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator');
  console.log(target, name, descriptor);
}

function Method(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator');
  console.log(target, name, descriptor);
}

function Parameter(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator');
  console.log(target, name, position);
}

class Product {
  @Property
  public title: string;
  private _price: number;

  @Accessor
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error('Price must be greater than zero.');
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @Method
  applyTax(@Parameter tax: number) {
    return this._price * tax;
  }
}

const product = new Product('Notebook', 3000);
