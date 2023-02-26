import counterReducer, { increment, decrement } from "./counterReducer";

describe("counterReducer", () => {
  test("increment", () => {
    expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
  });

  test("decrement", () => {
    expect(counterReducer({ value: 0 }, decrement())).toEqual({ value: -1 });
  });
});
