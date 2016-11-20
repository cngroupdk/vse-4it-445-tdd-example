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

    it('5 + 12 + 13', () => {
      expect(triangle.area(5, 12, 13)).to.be.equal(30)
    })

  })


  describe('throws Error', () => {
  
    it('for missing input parameter', () => {
      expect(() => {
        triangle.area(3, 8)
      }).to.throw('Missing input')
    })

    it('for non-sense input parameter', () => {
      expect(() => {
        triangle.area(3, 4, -5)
      }).to.throw('Invalid input')
    })

    it('for unconstructible triangle', () => {
      expect(() => {
        triangle.area(1, 1, 10)
      }).to.throw('Unconstructible triangle')
    })

  })

})
