import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
  test("empty store", () => {
    expect(getCounterValue({})).toBe(0);
  });

  test("should return 100", () => {
    expect(
      getCounterValue({
        counter: {
          value: 100,
        },
      })
    ).toBe(100);
  });
});
