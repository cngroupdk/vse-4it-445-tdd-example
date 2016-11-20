'use strict'

function triangle() {

  function area(a, b, c) {
    _checkMandatoryAreaParameters(a, b, c)
    _validateAreaParameters(a, b, c)
    _checkTriangleConstructibility(a, b, c)

    return _computeHeronsFormula(a, b, c)
  }


  function _checkMandatoryAreaParameters(a, b, c) {
    if (a === undefined || b === undefined || c === undefined) {
      throw (new Error('Missing input'))
    }
  }

  function _validateAreaParameters(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw (new Error('Invalid input'))
    }
  }

  function _checkTriangleConstructibility(a, b, c) {
    if ((a + b) < c ||
        (b + c) < a ||
        (c + a) < b) {
      throw (new Error('Unconstructible triangle'))
    }
  }

  function _computeHeronsFormula(a, b, c) {
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

