const enhancer = require("./enhancer.js");
// test away!

const item = {
  name: "Item 1",
  enhancement: 10,
  durability: 35,
};

describe("repair", () => {
  it("can repair an items durability to 100", () => {
    const expectedOutput = 100;
    const actualOutput = enhancer.repair(item);
    expect(actualOutput.durability).toBe(expectedOutput);
  });
});

describe("success", () => {
  it("can enhance an item by 1", () => {
    const expectedOutput = 11;
    const actualOutput = enhancer.success(item);
    expect(actualOutput.enhancement).toBe(expectedOutput);
    expect(actualOutput.durability).toBe(100);
  });

  it("will not enhance an item already at the max enhancement", () => {
    const maxEnhancement = {
      name: "Item 1",
      enhancement: 20,
      durability: 35,
    };

    const expectedOutput = 20;
    const actualOutput = enhancer.success(maxEnhancement);
    expect(actualOutput.enhancement).toBe(expectedOutput);
  });
});
