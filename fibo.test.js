const assert = require("assert");
const fibo = require("./fibo");

describe("fibonacci suite", () => {
  it("should be a function", () => {
    assert.strictEqual(typeof fibo, "function");
  });

  it("should not include for loop", () => {
    assert.strictEqual(fibo.toString().includes("for"), false);
  });

  it("should not include while loop", () => {
    assert.strictEqual(fibo.toString().includes("while"), false);
  });

  it("should be recursive", () => {
    assert.strictEqual(fibo.toString().includes("fibo("), true);
  });

  it("fibo(8) should be equal to 21", () => {
    assert.strictEqual(fibo(8), 21);
  });
});
