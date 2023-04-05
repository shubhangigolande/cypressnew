////<reference types="cypress"/>

describe('verify the mouse event', () => {
    // select
    // cy.select(value/values,option)
    it("verify select action", () => {
        cy.visit("https://example.cypress.io/commands/actions?");
        // Single
        // cy.get('.form-control.action-select').select('apples')//HTML TEXT
        // cy.get('.form-control.action-select').select('fr-apples')// value

        // cy.get(".form-control.action-select").select("apples") // HTML TXT
        // cy.get(".form-control.action-select").select("fr-apples")  // value

        // Multiple
       // cy.get('.form-control.action-select-multiple').select('apples', 'oranges')//html text

        // cy.get("select.action-select-multiple").select(["apples", "oranges"])
        // cy.get("select.action-select-multiple").select(["fr-apples", "fr-oranges"])
    });
})