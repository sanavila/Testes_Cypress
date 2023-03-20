// <reference types="cypress" />

it('Equality', () => {
  const a = 1
  expect(a).equal(1)
  expect(a).not.equal(2)
})

it('Truthy', () => {
  const a = true
  expect(a).true
})

it('Object Equality', () => {
  const obj = {
    a: 1,
    b: 2
  }

  expect(obj).equal(obj)
  // isso
  expect(obj).to.be.deep.equal({a: 1, b: 2}) 
  // ou 
  expect(obj).eql({a: 1, b: 2})
  expect(obj).include({a: 1})
})