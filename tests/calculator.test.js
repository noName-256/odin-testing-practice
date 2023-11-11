const calculator = require("../functions/calculator.js");
describe("Calculator addition test suite", () => {
  it("Add 1+2", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  it("Add -10 + 12", () => {
    expect(calculator.add(-10, 12)).toBe(2);
  });
  it("Add 1000 + 0", () => {
    expect(calculator.add(1000, 0)).toBe(1000);
  });
});
describe("Calculator subtraction test suite", () => {
  it("Subtract 20 - 12", () => {
    expect(calculator.subtract(20, 12)).toBe(8);
  });
  it("Subtract 30 - 40", () => {
    expect(calculator.subtract(30, 40)).toBe(-10);
  });
  it("Subtract 50 - (-50)", () => {
    expect(calculator.subtract(50, -50)).toBe(100);
  });
  it("Subtract 10 - 0", () => {
    expect(calculator.subtract(10, 0)).toBe(10);
  });
});
describe("Calculator multiplication test suite", () => {
  it("Multiply 12 by 20", () => {
    expect(calculator.multiply(12, 20)).toBe(240);
  });
  it("Multiply 13 by -10", () => {
    expect(calculator.multiply(13, -10)).toBe(-130);
  });
  it("Multiply 14 by 1", () => {
    expect(calculator.multiply(14, 1)).toBe(14);
  });
  it("Multiply 15 by 0", () => {
    expect(calculator.multiply(15, 0)).toBe(0);
  });
});
describe("Calculator division test suite", () => {
  it("Divide 16 / 1", () => {
    expect(calculator.divide(16, 1)).toBe(16);
  });
  it("Divide 17 / 2", () => {
    expect(calculator.divide(17, 2)).toBe(8.5);
  });
  it("Divide 18 / -3", () => {
    expect(calculator.divide(18, -3)).toBe(-6);
  });
  it("Divide 19 by -4", () => {
    expect(calculator.divide(19, -4)).toBe(-4.75);
  });
});
