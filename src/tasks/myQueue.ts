class MyQueue {
  private queue: number[];

  constructor() {
    this.queue = [];
  }

  push(x: number): void {
    this.queue.unshift(x);
  }

  pop(): number {
    return this.queue.pop() || 0;
  }

  peek(): number {
    return this.queue[this.queue.length - 1];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}
