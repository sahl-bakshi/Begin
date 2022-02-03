const arrayAnalysis = require("../code/analyzeArray");

test("sample test", () => {
    expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
});
  
test("all same numbers", () => {
    expect(arrayAnalysis([1, 1, 1, 1, 1])).toEqual({
      average: 1,
      min: 1,
      max: 1,
      length: 5,
    });
});