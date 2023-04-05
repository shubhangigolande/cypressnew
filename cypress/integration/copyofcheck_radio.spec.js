////<reference types="cypress"/>
describe('verify the functionality of check & radio buttons', () => {
    beforeEach(() => {
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
    })
    it('check() method for checkbox', () => {
        //check()
        cy.get('[value="red"]').check().should('be.checked')
        cy.get('[value="yellow"]').check().should('be.checked')
        cy.get('[value="blue"]').check().should('be.checked')
        cy.get('[value="purple"]').check().should('be.checked')
    })

    it('click()method for checkbox', () => {
        //click()
        cy.get('[value="red"]').click().should('be.checked')
        cy.get('[value="yellow"]').click().should('be.checked')
        cy.get('[value="blue"]').click().should('be.checked')
        cy.get('[value="purple"]').click().should('be.checked')
    })
    //multiple checkboxes
    it('multiple checkboxes', () => {
        //check()
        cy.get('[type="checkbox"]').check(['red', 'yellow', 'blue', 'orange', 'green', 'purple']).should('be.checked')
    })

    it('check for radioButton', () => {
        //check()
        cy.get('[type="radio"]').first().check().should('be.checked')
        cy.get('[type="radio"]').eq(2).check().should('be.checked')
        cy.get('[type="radio"]').eq(1).check().should('be.checked')
        //multiple radiobutton
        //check
        cy.get('[type="radio"]').check().should('have.attr', 'checked')
    })
    
    it.only('check for radioButton', () => {
        //click()
        cy.get('[type="radio"]').eq(0).click().should('be.checked')
        //cy.get('[type="radio"]').eq(1).click().should('have.attr','value')
        //cy.get('[type="radio"]').eq(2).click().should('have.text',' Opera')
    })

})