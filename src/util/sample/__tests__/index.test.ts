import { forEach, sum } from "~/util/sample";
import { getUserName } from "~/util/sample/user";

describe("index.ts", () => {
  describe("sum()", () => {
    test("1 + 2 は 3 である", () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
  describe("forEach", () => {
    const mockCallback = jest.fn((x) => 42 + x);
    describe("[0,1] を引数に渡したとき", () => {
      test("1つ目の結果は 42 となる", () => {
        forEach([0, 1], mockCallback);
        expect(mockCallback.mock.calls).toHaveLength(2);
        expect(mockCallback.mock.calls[0][0]).toBe(0);
        expect(mockCallback.mock.calls[1][0]).toBe(1);
        expect(mockCallback.mock.results[0].value).toBe(42);
      });
      test("2つ目の結果は 43 となる", () => {
        expect(mockCallback.mock.results[1].value).toBe(43);
      });
    });
  });
});
