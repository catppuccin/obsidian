const assert = require('assert')
const fs = require('fs')
const path = require('path')
const stylelint = require('stylelint')

function testConfigFile () {
  assert.doesNotThrow(() => {
    require(path.join(__dirname, '..', 'index.js'))
  })

  return Promise.resolve()
}

function testOrder () {
  const fixture = fs.readFileSync(path.join(__dirname, 'fixture.css'), 'utf8')
  const expected = fs.readFileSync(path.join(__dirname, 'expected.css'), 'utf8')

  return stylelint.lint({
    code: fixture,
    config: require('..'),
    fix: true
  }).then(result => {
    assert.strictEqual(result.errored, false)
    assert.strictEqual(result.output, expected, 'Stylelint output does not equal expected output')
  })
}

Promise
  .all([testConfigFile(), testOrder()])
  .then(() => console.log('OK'))
  .catch(e => {
    console.error(e.name, e.message)
    process.exit(-1)
  })
