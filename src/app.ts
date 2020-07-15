// const names: string[] = ['Daniel', 'Isabella'];
const names: Array<string> = ['Daniel', 'Isabella'];
console.log(names);

const promise = new Promise<string>((resolve, _reject) => {
  setTimeout(() => resolve('This is done!'), 1000);
});

promise.then(console.log);
