function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Daniel' }, { age: 22 });
console.log(`Name: ${mergedObj.name}`);
console.log(`Age: ${mergedObj.age}`);
