import { sum } from "~/util/sum/sum";

describe("sum.ts", () => {
  test("1 + 2 は 3 である", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
