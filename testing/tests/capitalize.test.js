const capitalize = require("../code/capitalize");

test('simple', () => {
  expect(capitalize(`hello`)).toMatch(`Hello`);
});

test('all capital', () => {
  expect(capitalize(`THERE`)).toMatch(`THERE`);
});


test('all small', () => {
  expect(capitalize(`mouse`)).toMatch(`Mouse`);
});
