interface PriorityQueue<T> {
  insert(data: T): void;
  peek(): T;
  extract(): T;

  isEmpty(): boolean;
  length(): number;

  comparator(arg0: T, arg1: T): boolean;
}

export default PriorityQueue;
