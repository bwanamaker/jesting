const functions = require("../functions/functions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Add 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

test("Should be truthy", () => {
  expect(functions.checkValue(2)).toBeTruthy();
});

test("User should be Brandon Wanamaker object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brandon",
    lastName: "Wanamaker",
  });
});
