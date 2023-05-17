///<reference types="cypress"/>
describe('ifreme',()=>{
    it('iframe',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.viewport(1200,720)
        
        //cy.iframe().find('a[href="mentorship"]').eq(0).should('have.text','Mentorship')
        //cy.iframe()

    })
})