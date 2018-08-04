const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `hello, ${name}.`;

test('Should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('Should generate greeting from name', () => {
  const result = generateGreeting('Developer');
  expect(result).toBe('hello, Developer.');
});

test('Should generate greeting from no name', () => {
  const result = generateGreeting();
  expect(result).toBe('hello, Anonymous.');
});
