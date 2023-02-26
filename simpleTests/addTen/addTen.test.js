const { addTen, Calculator } = require("./addTen");

describe("addTen", () => {
  let mockValue;
  beforeEach(() => {
    mockValue;
    // add to db
  });

  beforeAll(() => {});

  test("Valid value", () => {
    expect(addTen(10)).toBe(20);
    expect(addTen(10)).not.toBe(30);
    expect(addTen(50)).toBeGreaterThan(50);
    expect(addTen(50)).not.toBeUndefined();
  });

  test("should call one time", () => {
    const spyCalculatorAddTen = jest.spyOn(Calculator, "addTen");
    addTen(10);
    expect(spyCalculatorAddTen).toBeCalledTimes(1);
  });

  afterEach(() => {
    // remove from db
    jest.clearAllMocks();
  });

  afterAll(() => null);
});
