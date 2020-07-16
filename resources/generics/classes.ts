class DataStorage<T extends number | string | boolean> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  remove(item: T) {
    const idx = this.data.indexOf(item);

    if (idx >= 0) {
      this.data.splice(idx, 1);
    }
  }

  getAll() {
    return [...this.data];
  }
}

const storage = new DataStorage<string>();
storage.add('Daniel');
storage.add('Isabella');

console.log(storage.getAll());
