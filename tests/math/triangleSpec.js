'use strict'

const chai = require('chai')
const path = require('path')

const expect = chai.expect

const triangleModule = require(path.resolve(__dirname, '..', '..', 'src', 'math', 'triangle.js'))


describe('triangle', () => {

  it('module is defined', () => {
    expect(triangleModule).to.exist
  })

  const triangle = triangleModule()


  describe('computes correctly', () => {

    it('3 + 4 + 5', () => {
      expect(triangle.area(3, 4, 5)).to.be.equal(6)
    })

  })

})
