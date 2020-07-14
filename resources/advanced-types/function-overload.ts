type Combinable = string | number;

// Define function return type according to parameter types
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable): Combinable {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

const value = add(5, 7);
console.log(typeof value);
