class Department {
  private employees: string[];

  constructor(private readonly id: string, public name: string) {
    this.employees = [];
  }

  describe() {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(name: string) {
    this.employees.push(name);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'Tech');
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[] = []) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('IT', ['Daniel']);
console.log(it);

const accounting = new AccountingDepartment('ACC');
console.log(accounting);
