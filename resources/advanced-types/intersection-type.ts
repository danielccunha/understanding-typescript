type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Employee | Admin;

const employee: ElevatedEmployee = {
  name: 'Daniel',
  privileges: ['create-server'],
  startDate: new Date(),
};
