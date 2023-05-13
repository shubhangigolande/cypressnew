///<reference types="cypress"/>

//basic(simple) alert:-
xdescribe('verify the alert', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    //cy.on()
    it.skip('verify js alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('I am a JS Alert')
        })
    })
    //cy.window()
    it.skip('verify the alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el) => {
            cy.stub(el, 'alert').as('alert')
        })
        cy.get('button[onclick="jsAlert()"]').click()
        cy.get('@alert').should('have.been.calledOnceWith', 'I am a JS Alert')
    })
})

//confirm alert:-
describe('verify the js confirm alert', () => {
    //cy.on()
    it('validate the js confirm alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm', (el) => {
            expect(el).to.equal('I am a JS Confirm')
            return true
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })
    //or
    //cy.on
    it('validate the js confirm alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm', (el) => {
            expect(el).to.equal('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })
    //cy.window()
    it('validtae the js confirm alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el) => {
            cy.stub(el, 'confirm').as('alert')
        })
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.get('@alert').wait(4000).should('have.been.calledOnceWith', 'I am a JS Confirm')
    })
})

//prompt alert
xdescribe('verify the js prompt alert', () => {
    //cy.window()
    //user enter text
    it('validate the js prompt alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el) => {
            cy.stub(el, 'prompt').returns('shubhangi golande')
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('contain', 'shubhangi golande')

    })
    //or
    //cy.window()
    // empty string
    it('validate the js prompt alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el) => {
            cy.stub(el, 'prompt').returns('')
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('contain', 'You entered:')

    })
    //cy.window()
    //cy.window()
    //cancel button click
    it('validate the js prompt alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el) => {
            cy.stub(el, 'prompt').callsFake(()=>null)
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('contain', 'You entered: null')
        cy.get('#result').should('be.visible')

    })
})





