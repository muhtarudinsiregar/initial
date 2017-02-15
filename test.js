const assert = require('assert')
const initial = require('./index')

describe('initial output', function () {
  it("should return a 'SS'", function () {
    const actual = initial('Storm Spirit')
    const expected = 'SS'

    assert.equal(expected, actual)
  })

  it("should return a 'J'", function () {
    const actual = initial('Jakiro')
    const expected = 'J'

    assert.equal(expected, actual)
  })

  it('should return false if string undefined', function () {
    assert.equal(false, initial())
  })
})
