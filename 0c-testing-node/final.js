// Your code goes here. See readme.md for more details.



// The code below is NOT TO BE CHANGED.
// This code tests your code above for correctness.

const assert = require("assert");
const { describe, it } = require("node:test");

if (typeof fullname === undefined) {
  fullname = undefined;
}

describe("username", function () {
  it("holds a string", function () {
    assert.deepStrictEqual(
      typeof fullname,
      "string",
      "The variable username either doesn't exist or is not a string."
    );
  });

  it("has two words", function () {
    assert.deepStrictEqual(
      fullname.split(" ").length,
      2,
      "username should be a string with two words separated by a space"
    );
  });
});
