const capitalize = require("../functions/capitalize");
describe("Capitalize test suite", () => {
  it("capitalize a", () => {
    expect(capitalize("a")).toBe("A");
  });
  it("capitalize b", () => {
    expect(capitalize("b")).toBe("B");
  });
  it("capitalize y", () => {
    expect(capitalize("y")).toBe("Y");
  });
  it("capitalize z", () => {
    expect(capitalize("z")).toBe("Z");
  });
  it("capitalize C", () => {
    expect(capitalize("C")).toBe("C");
  });
  it("capitalize D", () => {
    expect(capitalize("D")).toBe("D");
  });
  it("capitalize U", () => {
    expect(capitalize("U")).toBe("U");
  });
  it("capitalize W", () => {
    expect(capitalize("W")).toBe("W");
  });
});
