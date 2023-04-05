////<reference types="cypress"/>
describe('basic Element selector', () => {
    it('Element selector', () => {
        cy.visit('http://127.0.0.1:5500/index..html')
        //select by tagName
        cy.get('h1').should('have.class','class1')
        //select by ID
        cy.log('select by ID')
        cy.get('#head1').should('have.class','class1')
        cy.log('Select by class')
        cy.get('.class1').should('have.text','Header1')
        cy.log('General formula / css selector')
        cy.get("[class='class1']").should('have.text','Header1')
    });
});