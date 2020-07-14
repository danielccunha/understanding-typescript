type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Intersection Types
type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Employee | Admin;

const employee: ElevatedEmployee = {
  name: 'Daniel',
  privileges: ['create-server'],
  startDate: new Date(),
};

// Type Guard
function printEmployee(employee: UnknownEmployee) {
  console.log(`Name: ${employee.name}`);

  if ('privileges' in employee) {
    console.log(`Privileges: ${employee.privileges || []}`);
  }

  if ('startDate' in employee) {
    console.log(`Start date: ${employee.startDate || 'N/D'}`);
  }
}

printEmployee(employee);

class Car {
  drive() {
    console.log('Driving a car...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo: ${amount}`);
  }
}

type Vehicle = Car | Truck;
const car = new Car();
const truck = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(car);
useVehicle(truck);

// Discriminated Unions
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;

  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }

  console.log(`Moving ${animal.type} at speed ${speed}`);
}

const horse: Horse = { type: 'horse', runningSpeed: 10 };
moveAnimal(horse);

// Type Casting
// const userInput = <HTMLInputElement>document.getElementById('message-output')!;
const userInput = document.getElementById('user-input');
if (userInput instanceof HTMLInputElement) {
  userInput.value = 'Hi there!';
}
