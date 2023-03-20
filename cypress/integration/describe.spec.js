// <reference types="cypress" />

it("A external test", () => {});

describe("Should group testes...", () => {
  describe("Should group more specific testes...", () => {
    it.skip("A Specific test", () => {

    });
  })
  it("A internal test", () => {

  });
});
