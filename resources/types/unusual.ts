let userInput: unknown;
let userName: string;

userInput = 'Daniel';
userInput = 22;

if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateError('An error occurred!', 500);
