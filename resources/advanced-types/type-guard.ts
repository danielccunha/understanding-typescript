type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type UnknownEmployee = Employee | Admin;

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
