const { shuffleString } = require("../../utils/utils");
const { performance } = require("perf_hooks");
const {
  veryBasic,
  basic,
  lorem,
  thousandWords,
  tenThousandWords,
} = require("./text");

describe("Shuffle", () => {
  it("Should shuffle a very basic sentence", () => {
    const result = shuffleString(veryBasic);
    expect(result).not.toMatch("a b c");
  });

  it("Should shuffle a basic string 3 times and check that all results are different", () => {
    const result1 = shuffleString(basic),
      result2 = shuffleString(basic),
      result3 = shuffleString(basic),
      result =
        result1 !== result2
          ? result1 !== result3
            ? result2 !== result3
              ? true
              : false
            : false
          : false;
    expect(result).toBeTruthy();
  });

  it("Should shuffle a whole paragraph", () => {
    expect(shuffleString(lorem)).not.toMatch(lorem);
  });

  it("Should shuffle in less than 2 seconds", () => {
    var startTime = performance.now();
    const shuffle = shuffleString(lorem);
    var endTime = performance.now();
    expect(endTime - startTime).toBeLessThan(2000);
  });

  it("Should shuffle 1000 words", () => {
    expect(shuffleString(thousandWords)).not.toMatch(thousandWords);
  });

  it("Should shuffle 10k words", () => {
    expect(shuffleString(tenThousandWords)).not.toMatch(tenThousandWords);
  });

  it("Should shuffle 10k words in less than 2000ms", () => {
    var startTime = performance.now();
    const shuffle = shuffleString(tenThousandWords);
    var endTime = performance.now();
    expect(endTime - startTime).toBeLessThan(2000);
  });
});
