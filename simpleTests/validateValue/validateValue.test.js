const validateValue = require("./validateValue");

describe("validateValue", () => {
  test("Validate value", () => {
    expect(validateValue(50)).toBe(true);
  });

  test("less than the correct value", () => {
    expect(validateValue(-50)).toBe(false);
  });

  test("greater than the correct value", () => {
    expect(validateValue(150)).toBe(false);
  });

  test("border value", () => {
    expect(validateValue(100)).toBe(true);
  });
});
