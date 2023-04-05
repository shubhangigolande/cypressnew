
describe('Verify the mouse Actions',()=>{

    beforeEach(()=>{
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it('Verify the doubleClick',()=>{
        cy.get('.action-div').dblclick()
        cy.get('.action-input-hidden').should('be.visible')
    })

    it('Verify the rightclick',()=>{
        cy.get('.rightclick-action-div').rightclick()
        cy.get('.rightclick-action-div').should('have.class','hidden')
        cy.get('.rightclick-action-input-hidden').should('be.visible')
    })

    it.only('Verify the ScrolllTo',()=>{
        //cy.scrollTo('bottom')
        cy.get('#scrollable-vertical').scrollTo('center')

    })
})