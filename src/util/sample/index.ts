export function sum(a: number, b: number): number {
  return a + b;
}

export function forEach(items: number[], callback: (v: number) => void) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
