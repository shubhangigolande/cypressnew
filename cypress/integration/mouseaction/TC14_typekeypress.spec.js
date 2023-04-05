
 ////<reference types="cypress"/>


// describe('verify the mouse event', () => {
//    // rightclick
// it("verify rightclick action", () => {
//     cy.visit("https://example.cypress.io/commands/actions?");
//     cy.get(".rightclick-action-div").last().rightclick();
//     cy.get(".rightclick-action-div").last().should("have.class", "hidden");
// });

// // type (keypress)
// it("verify keypress", () => {
//     cy.visit("https://example.cypress.io/commands/actions?");
//     // .type("ABC")
//     // .type("{keyName}")

//     cy.get("#email1").type("ABC@gmail.com").should("have.value", "ABC@gmail.com");
//     cy.get("#email1").type("{backspace}").should("have.value", "ABC@gmail.co");
//     cy.get("#email1").type("{selectall}{backspace}").should("have.value", "");
// });

// it("verify keypress", () => {
//     cy.visit("https://www.amazon.com/ref=nav_bb_logo");
//     cy.wait(4000)
//     cy.get("#twotabsearchtextbox").type("Mobile{enter}")
//           });
// })




//practice
describe('verify the mouseEvent type',()=>{
    //.type('abc@gmail.com)
    //.type('{keyname}')
    it('validate the mouse type',()=>{
        //type()
        cy.visit('https://example.cypress.io/commands/actions?')
        cy.get('#email1').type('abc@gmail.com').should('have.value','abc@gmail.com')
        cy.get('#email1').type('{backspace}').should('have.value','abc@gmail.co')
        cy.get('#email1').type('{selectall}{backspace}').should('have.value','')


    })
    it('validate the keypress',()=>{
       //keypress
       cy.visit('https://www.amazon.com/ref=nav_bb_logo')
       cy.get('#twotabsearchtextbox').type('mobile{enter}')

    })
    it('validate the mouse event right click',()=>{
        //keypress
        cy.visit('https://example.cypress.io/commands/actions?')
        cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
        cy.get('.rightclick-action-input-hidden').rightclick().should('be.visible')
 
     })

     it.only('validate the mouse event select click',()=>{
        //keypress
        cy.visit('https://example.cypress.io/commands/actions?')
        cy.get('.form-control.action-select').should('have.value','--Select a fruit--')
        cy.get('.form-control.action-select').select('apples')
        cy.get('.form-control.action-select').select('oranges')
        cy.get('.form-control.action-select').select('bananas')

        cy.get('.form-control.action-select-multiple').select('apples','oranges','bananas')
        

        
     })

})