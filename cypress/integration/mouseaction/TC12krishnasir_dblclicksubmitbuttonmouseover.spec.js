// // Actions -->
// xdescribe('validate the user', () => {
//     it('verify the double click', () => {
//         cy.visit('https://example.cypress.io/commands/actions?')
//         cy.contains('Double click to edit').dblclick()
//         cy.get('.action-input-hidden.form-control').should('be.visible')
//         cy.get('.action-input-hidden').should('exist')
//         cy.get('.action-input-hidden').should('be.visible')
       
//     })
//     it('verify the submit button',()=>{
//         cy.visit('https://example.cypress.io/commands/actions?')
//         cy.get('form.action-form').find('#couponCode1').type('RAM')
//         cy.get('form.action-form').submit()
//         cy.get('form.action-form').siblings('p').should('have.text','Your form has been submitted!')

//     })

// })

describe('verify the mouse over',()=>{
    it('mouse over action',()=>{
        cy.visit('https://www.amazon.com/ref=nav_bb_logo')
        cy.get('[id="nav-link-accountList"]').trigger('mouseover')
        cy.get('.nav-text').last().click({force: true}).should('have.text','Music Library')

    })
})



// xdescribe("Handel mouse actions ", () => {
//     // mouseover
//     it.skip("verify mouseover action", () => {
//               cy.visit("https://www.amazon.com/ref=nav_bb_logo");
//               // cy.get("#navBackToTop").scrollIntoView().should("have.css", "color", "rgb(0, 75, 145)").and("have.css", "background-color", "rgba(0, 0, 0, 0)").trigger("mouseover", { force: true }).should("have.css", "color", "rgb(17, 17, 17)").and("have.css", "background-color", "rgba(0, 0, 0, 0)");
//               // cy.get("#navBackToTop").scrollIntoView().trigger("mouseover", { force: true }).should("have.css", "color", "rgb(17, 17, 17)").and("have.css", "background-color", "rgba(0, 0, 0, 0)");
//     });

//     it("verify mouseover action: Example2", () => {
//               cy.visit("https://www.amazon.com/ref=nav_bb_logo");
//               cy.get("#nav-link-accountList").trigger("mouseover")
//               cy.get(".nav-action-inner").contains("Sign in").should("exist").and("be.visible")

//     });

// });



// describe("validate user actions ", () => {

//     // dbclick
//     it("verify dbclick action", () => {
//               cy.visit("https://example.cypress.io/commands/actions?");
//               cy.contains("Double click to edit").dblclick();
//               cy.get(".action-input-hidden.form-control").should("be.visible");
//               //
//               cy.get(".action-input-hidden").should("exist");
//               cy.get(".action-input-hidden").should("be.visible");
//               // "not.exist"
//               // "not.be.visible"
//     });

//     // submit
//     // cy.submit()
//     it("verify submit action", () => {
//               cy.visit("https://example.cypress.io/commands/actions?");
//               cy.get("form.action-form").find("#couponCode1").type("ABC");
//               cy.get("form.action-form").submit()
//               cy.get("form.action-form").siblings("p").should("have.text", "Your form has been submitted!")
//     });

//     // select
//     it.only("verify select action", () => {
//               cy.visit("https://example.cypress.io/commands/actions?");
//     });

//     // rightclick
//     // type (keypress)

// });
