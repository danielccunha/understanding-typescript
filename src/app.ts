class Department {
  protected employees: string[];

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

const accounting = new AccountingDepartment('ACC', ['Lorem ipsum']);
accounting.lastReport = 'Some random report';
console.log(accounting, accounting.lastReport);
