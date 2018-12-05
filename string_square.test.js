const string_square=require("./string_square");

test("Void test", () => {
    expect (string_square()).toBe(-1)
});

test("Nomal test", () => {
    expect (string_square("abc")).toBe(9)
});

test("Number test", () => {
    expect (string_square(-5)).toBe(-1)
});

test("Empty String test", () => {
    expect (string_square("")).toBe(0)
});

test("Empty String test", () => {
    expect (string_square("")).toBe(0)
});

test("null test", () => {
    expect (string_square(null)).toBe(-1)
});

test("undefined test", () => {
    expect (string_square(undefined)).toBe(-1)
});

test("object test", () => {
    expect (string_square([0, "abc"])).toBe(-1)
});
