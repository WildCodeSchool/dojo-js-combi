const assert = require("assert");
const combi = require("./combi");

describe("combi suite", () => {
  it("should be a function", () => {
    assert.strictEqual(typeof combi, "function");
  });

  it("should not include for loop", () => {
    assert.strictEqual(combi.toString().includes("for"), false);
  });

  it("should not include while loop", () => {
    assert.strictEqual(combi.toString().includes("while"), false);
  });

  it("should not include forEach loop", () => {
    assert.strictEqual(combi.toString().includes("forEach"), false);
  });



  it("combi(['A', 'B', 'C']) should be equal to ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']", () => {
    assert.strictEqual(combi(['A', 'B', 'C']), ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']);
  });

  it("combi(['A', 'B', 'C', 'A']) should be equal to ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']", () => {
    assert.strictEqual(combi(['A', 'B', 'C', 'A']), ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']);
  });

  it("combi([1, 2, 3]) should be equal to ['123', '132', '213', '231', '312', '321']", () => {
    assert.strictEqual(combi([1, 2, 3]), ['123', '132', '213', '231', '312', '321']);
  });

  it("combi([1, Z, 3]) should be equal to ['1Z3', '13Z', 'Z13', 'Z31', '31Z', '3Z1']", () => {
    assert.strictEqual(combi([1, 'Z', 3]), ['1Z3', '13Z', 'Z13', 'Z31', '31Z', '3Z1']);
  });

  it("combi([]) should be equal to []", () => {
    assert.strictEqual(combi([]), []);
  });

  it("combi() should throw an error", () => {
    assert.throws(combi(), /^Error: Illegal argument$/);
  });
});
