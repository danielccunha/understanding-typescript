const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  console.log(`Result is ${num}`);
};

let combineValues: (a: number, b: number) => number;
combineValues = add;

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = combineValues(n1, n2);
  cb(result);
};

addAndHandle(10, 20, printResult);
