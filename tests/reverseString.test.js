const reverseString = require("../functions/reverseString.js");
describe("Reverse string test suite", () => {
  it("Reverse abcdefghk", () => {
    expect(reverseString("abcdefghk")).toBe("khgfedcba");
  });
  it("Reverse Abc", () => {
    expect(reverseString("Abc")).toBe("cbA");
  });
  it("Reverse xYz12", () => {
    expect(reverseString("xYz12")).toBe("21zYx");
  });
  it("Reverse 1234567890", () => {
    expect(reverseString("1234567890")).toBe("0987654321");
  });
  it("Reverse a", () => {
    expect(reverseString("a")).toBe("a");
  });
  it("Reverse D", () => {
    expect(reverseString(".")).toBe(".");
  });
  it("Reverse U", () => {
    expect(reverseString("1")).toBe("1");
  });
  it("Reverse W", () => {
    expect(reverseString("abcdEFGHkL1.2.3,4/5-6=7`8(9)0*")).toBe(
      "*0)9(8`7=6-5/4,3.2.1LkHGFEdcba"
    );
  });
});
