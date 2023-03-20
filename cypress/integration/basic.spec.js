describe("Cypress basics", () => {
  it("Should visit a page and assert title", () => {
    cy.visit("https://www.facebook.com/")
    cy.title().should("be.equal", "Facebook")
  })
  it("Should find and interact with a element",() => {
    cy.visit("https://www.facebook.com/")
    cy.get('.fb_logo').click()
    cy.get("[data-testid=royal_login_button]").should("have.text", "Entrar")
  })
});
