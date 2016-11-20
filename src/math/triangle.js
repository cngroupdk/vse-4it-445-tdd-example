'use strict'

function triangle() {

  function area(a, b, c) {
    if (a === undefined || b === undefined || c === undefined) {
      throw(new Error('Missing input'))
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw(new Error('Invalid input'))
    }

    // Herons formula
    const s = (a + b + c) / 2
    const t = s * (s - a) * (s - b) * (s - c)
    const triangleArea = Math.sqrt(t)
    return triangleArea
  }

  const api = {
    area: area
  }

  return api

}

module.exports = triangle

