'use strict'

const chai = require('chai')
const path = require('path')

const expect = chai.expect

const triangleModule = require(path.resolve(__dirname, '..', '..', 'src', 'math', 'triangle.js'))


describe('triangle', () => {

  it('module is defined', () => {
    expect(triangleModule).to.exist
  })

})
