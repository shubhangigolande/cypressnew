// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type(email)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
 })

 //TC30_customcommand
 Cypress.Commands.add('staticdropdown',(text,country)=>{     
    cy.get('#autocomplete').type(text)
    cy.get('.ui-menu-item > div').each((el)=>{
        text = el.text()
        cy.log(text)
        if(text == country){
            cy.get(el).click()
        }
    })
    cy.get('.ui-menu-item > div').contains(country).click()
 }) 


//TC36_revisecustomcommand.spec.js
 Cypress.Commands.add('login2', (url,emailField,PassField,submitButton,email, password) => { 
    cy.visit(url)
    cy.get(emailField).type(email)
    cy.get(PassField).type(password)
    cy.get(submitButton).click()
 })


//0 comments on commit 
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload'