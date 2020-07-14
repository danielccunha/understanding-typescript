const userInput1 = <HTMLInputElement>document.getElementById('user-input')!;
const userInput2 = document.getElementById('user-input')! as HTMLInputElement;

if (userInput1 instanceof HTMLInputElement) {
  userInput1.value = 'Hi there!';
}
