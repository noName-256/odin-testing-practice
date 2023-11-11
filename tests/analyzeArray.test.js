const analyzeArray = require("../functions/analyzeArray.js");
describe("Capitalize test suite", () => {
  it("Analyze [1, 8, 3, 4, 2, 6]", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
  it("Analyze [1, -8, 3, 4, 2, 6]", () => {
    expect(analyzeArray([1, -8, 3, 4, 2, 6, 0, 0])).toEqual({
      average: 1,
      min: -8,
      max: 6,
      length: 8,
    });
  });
  it("Analyze [1, 2, 3, 4]", () => {
    expect(analyzeArray([1, 2, 3, 4])).toEqual({
      average: 2.5,
      min: 1,
      max: 4,
      length: 4,
    });
  });
  it("Analyze [1, 2, 3, 4, 0]", () => {
    expect(analyzeArray([1, 2, 3, 4, 0])).toEqual({
      average: 2,
      min: 0,
      max: 4,
      length: 5,
    });
  });
});
