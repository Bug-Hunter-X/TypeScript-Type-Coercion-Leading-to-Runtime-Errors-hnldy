function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, "10"); // This will compile without error in TypeScript
console.log(result); // However, it will produce NaN.