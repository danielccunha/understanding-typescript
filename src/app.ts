class Department {
  private employees: string[];

  constructor(private id: string, public name: string) {
    this.employees = [];
  }

  describe() {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(name: string) {
    this.employees.push(name);
  }
}

const department = new Department('ACC', 'Accounting');

department.describe();
department.addEmployee('Rose');

console.log(department);
