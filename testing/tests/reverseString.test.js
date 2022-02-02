const reverseString = require("../code/reverseString");

test('simple', () => {
    expect(reverseString(`hello`)).toMatch(`olleh`);
});

test('more than 1 word', () => {
    expect(reverseString(`hello there neighbour`)).toMatch(`ruobhgien ereht olleh`);
});