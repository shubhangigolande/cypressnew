///<reference types='cypress'/>
describe('verify the custom command', () => {
    it('verify the custom command', () => {
        cy.login('standard_user', 'secret_sauce')
        cy.url.should('contain','inventory')
        cy.get('.app_logo').should('be.visible')

        cy.get('.title').should('have.text','Products')

    })
})