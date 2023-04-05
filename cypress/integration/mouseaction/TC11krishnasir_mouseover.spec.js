////<reference types="cypress"/>

describe("Handel mouse ", () => {

//     it("verify mouseover action", () => {
//         cy.visit("https://www.amazon.com/ref=nav_bb_logo");

//         cy.get("#navBackToTop").scrollIntoView().should("have.css", "color", "rgb(0, 75, 145)")
//         .and("have.css", "background-color", "rgba(0, 0, 0, 0)");

//         cy.get("#navBackToTop").scrollIntoView().wait(2000).trigger("mouseover", { force: true })
//         .should("have.css", "color", "rgb(17, 17, 17)").and("have.css","background-color","rgba(0, 0, 0, 0)");
//         });

it('verify mouse over',()=>{
     cy.visit('https://www.amazon.com/ref=nav_bb_logo')
    // cy.get('#navBackToTop').scrollIntoView().should('have.css','color','rgb(0, 75, 145)').wait(4000)
    // .and('have.css','background-color', 'rgba(0, 0, 0, 0)')

    cy.get('#navBackToTop').scrollIntoView().trigger('mouseover').should('have.css','color','rgb(0, 75, 145)')
    .and('have.css','background-color','rgba(0,0,0,0)')
})


});
