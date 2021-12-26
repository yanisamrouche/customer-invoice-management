/// <reference types="Cypress" />

describe("Test", () => {
    it("sould work", () => {
        cy.visit("https://google.com")
            .get("input")
            .first()
            .type("Hello");
    })
})