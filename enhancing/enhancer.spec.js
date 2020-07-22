const enhancer = require("./enhancer.js");
// test away!

const item = {
  durability: 35,
};

describe("repair", () => {
  it("can repair an items durability to 100", () => {
    const expectedOutput = 100;
    const actualOutput = enhancer.repair(item);
    expect(actualOutput.durability).toBe(expectedOutput);
  });
});
