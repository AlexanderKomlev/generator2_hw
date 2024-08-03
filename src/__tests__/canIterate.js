import canIterate from '../canIterate';

test.each([
    [new Map(), true],
    [new Set(), true],
    [null, false],
    [10, false],
    ["JavaScript", true],
])("canIterate(%s) should be %s", (value, expected) => {
    expect(canIterate(value)).toBe(expected);
});
