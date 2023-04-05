///<reference types="cypress"/>

describe('verify the alert',()=>{
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })
    it.skip('verify js alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on('window:alert',(text)=>{           
        expect(text).to.equal('I am a JS Alert')
        })
    })
    // it('verify the alert',()=>{
    //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    //     cy.window().then((el)=>{
    //         cy.stub(el,'alert').as('alert')
    //     })
    //     cy.get('button[onclick="jsAlert()"]').click()
    //     cy.get('@alert').should('have.been.calledOnceWith','I am a JS Alert')
    // })
})




