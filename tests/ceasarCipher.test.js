const caesarCipher = require("../functions/caesarCipher.js");
describe("Caesar cipher test suite", () => {
  it("Cipher a", () => {
    expect(caesarCipher("a")).toBe("b");
  });
  it("Cipher B", () => {
    expect(caesarCipher("B")).toBe("C");
  });
  it("Cipher CdEf", () => {
    expect(caesarCipher("CdEf")).toBe("DeFg");
  });
  it("Cipher abcdef uvwxyz", () => {
    expect(caesarCipher("abcdef uvwxyz")).toBe("bcdefg vwxyza");
  });
  it("Cipher abCdeF uVwxYz", () => {
    expect(caesarCipher("abCdeF uVwxYz")).toBe("bcDefG vWxyZa");
  });
  it("Cipher 'defend the east wall of the castle'", () => {
    expect(caesarCipher("defend the east wall of the castle")).toBe(
      "efgfoe uif fbtu xbmm pg uif dbtumf"
    );
  });
  it(".!?,*-=", () => {
    expect(caesarCipher(".!?,*-=")).toBe(".!?,*-=");
  });
});
