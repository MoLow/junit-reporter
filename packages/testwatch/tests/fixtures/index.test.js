const { test } = require('node:test');
const assert = require('node:assert');

test('index - sum', () => {
  assert.strictEqual(1 + 2, 3);
});
test('index - subtraction', () => {
  assert.strictEqual(2 - 1, 1);
});
