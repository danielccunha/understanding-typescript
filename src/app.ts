abstract class Department {
  static readonly fiscalYear = 2020;
  protected employees: string[];

  constructor(private readonly id: string, public name: string) {
    this.employees = [];
  }

  static createEmployee = (name: string) => ({ name });

  abstract describe(): void;

  addEmployee(name: string) {
    this.employees.push(name);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'Tech');
  }

  describe(): void {
    console.log('IT Department');
  }
}

class AccountingDepartment extends Department {
  private _lastReport: string;

  get lastReport() {
    if (this._lastReport) {
      return this._lastReport;
    }

    throw new Error('No report found.');
  }

  set lastReport(value: string) {
    this._lastReport = value;
  }

  constructor(id: string, private reports: string[] = []) {
    super(id, 'Accounting');
    this._lastReport = reports.length ? reports[reports.length - 1] : '';
  }

  describe(): void {
    console.log('Accounting Department');
  }

  addEmployee(name: string) {
    if (this.employees.some((n) => n === name)) {
      return;
    }

    this.employees.push(name);
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
it.describe();

const accounting = new AccountingDepartment('ACC', ['Lorem ipsum']);
accounting.lastReport = 'Some random report';
console.log(accounting, accounting.lastReport);

console.log(Department.createEmployee('Daniel'));
