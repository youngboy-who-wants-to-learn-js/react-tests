const parseObjectValuestoStringArray = require("./parseObjectValuestoStringArray");

describe("parseObjectValuestoStringArray", () => {
  test("should return correct value", () => {
    expect(parseObjectValuestoStringArray({ x: 1, y: 2 })).toEqual(["1", "2"]);
  });

  test("should filter and  return correct value", () => {
    expect(
      parseObjectValuestoStringArray({ a: 1, x: 2, q: "r", h: null })
    ).toEqual(["1", "2"]);
  });

  test("should return empty array", () => {
    expect(parseObjectValuestoStringArray({})).toEqual([]);
  });

  test("should not equal", () => {
    expect(parseObjectValuestoStringArray({ x: 1, y: 2 })).not.toEqual([
      "1",
      "2",
      "3",
    ]);
  });
});
