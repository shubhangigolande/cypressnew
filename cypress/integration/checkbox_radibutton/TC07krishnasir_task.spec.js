///<reference types="cypress"/>
describe('verufy the test data"MyWebForm"', () => {
    beforeEach(() => {
        cy.visit('http://tizag.com/htmlT/htmlinput.php')
    })
    //empty boxes
    it('verify check elemet', () => {
        cy.get('[type="checkbox"]').first().should('not.be.checked')
        cy.get('[type="text"]').eq(1).should('not.be.checked')
        cy.get('[type="radio"]').first().should('not.be.checked')
        cy.get('[type="radio"]').eq(1).should('not.be.checked')
        cy.get('[value="SUBMIT"]').first().should('be.visible')
        cy.get('[value="RESET"]').first().should('be.visible')
    })
    //write action in elemnt of boxes
    it('verify check elemet', () => {
        cy.get('[type="checkbox"]').eq(1).click().should('be.checked')
        cy.get('[type="text"]').eq(2).click().should('have.value', 'David')
        cy.get('[type="radio"]').eq(2).check().should('be.checked')
        cy.get('[type="radio"]').eq(3).should('not.be.checked')
        cy.get('[type="submit"]').eq(2).should('be.visible')
        cy.get('[type="reset"]').eq(1).should('be.visible')
    })
})