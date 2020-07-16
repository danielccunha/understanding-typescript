function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

const value = extractAndConvert({ name: 'Daniel' }, 'name');
console.log(value);
