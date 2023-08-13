jest.mock("../request");

import { getUserName } from "~/util/sample/user";

describe("user.ts", () => {
  describe("getUsername", () => {
    test("ユーザー名 `tetty` が取得できること for Promise", () => {
      expect.assertions(1);
      return getUserName(4).then((data) => expect(data).toBe("tetty"));
    });
    test("ユーザー名 `tetty` が取得できること for resolve", () => {
      expect.assertions(1);
      return expect(getUserName(5)).resolves.toBe("tetty2");
    });
    test("存在しないユーザーの場合、エラーを取得する for Promise", () => {
      expect.assertions(1);
      return getUserName(2).catch((e) =>
        // eslint-disable-next-line jest/no-conditional-expect
        expect(e).toEqual({
          error: "User with 2 not found.",
        }),
      );
    });
    test("存在しないユーザーの場合、エラーを取得する for reject", () => {
      expect.assertions(1);
      return expect(getUserName(3)).rejects.toEqual({
        error: "User with 3 not found.",
      });
    });
  });
});
