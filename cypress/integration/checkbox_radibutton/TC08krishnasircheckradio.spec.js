// Radio buttons ==>
//1. Assert empty Radio button, Check Radio button & assert
//2. Check multiple Radio buttons & assert
//3. Check Radio button with click  

describe("Radio Buttons", () => {
    it("1. Assert default Radio button condition", () => {
        cy.visit("http://www.tizag.com/htmlT/htmlradio.php");
        cy.get(".display form > input").first().should("be.checked");
        // cy.get(".display form > input").first().should("have.attr", "checked", "yes");
        cy.get(".display form > input").first().should("have.attr", "checked", "checked");

        // For unchecked button
        cy.get(".display form > input").eq(1).should("not.be.checked");
        cy.get(".display form > input").eq(1).should("not.have.attr", "checked", "checked");
    });

    it("2. Check Radio button & assert", () => {
        cy.visit("http://www.tizag.com/htmlT/htmlradio.php");
        cy.get(".display form > input").first().check().should("be.checked");
        cy.get(".display form > input").first().should("have.attr", "checked", "checked");

        // For unchecked button
        cy.get(".display form > input").eq(1).check().should("be.checked");

        // No action
        cy.get(".display form > input").first().should("not.be.checked");
        cy.get(".display form > input").first().should("have.attr", "checked", "checked");
    });


    it("3. Check Radio button & assert with Click action", () => {
        cy.visit("http://www.tizag.com/htmlT/htmlradio.php");
        cy.get(".display form > input").first().click().should("be.checked");
        cy.get(".display form > input").first().should("have.attr", "checked", "checked");

        // For unchecked button
        cy.get(".display form > input").eq(1).click().should("be.checked");

        // No action
        cy.get(".display form > input").first().should("not.be.checked");
        cy.get(".display form > input").first().should("have.attr", "checked", "checked");
    });

    it.only("4. Check multiple Radio buttons & assert", () => {
        cy.visit("http://www.tizag.com/htmlT/htmlradio.php");
        //cy.get(".display form > input").check().should("be.checked");

        // For unchecked button
        cy.get(".display form > input").eq(1).check().should("be.checked");
    });
});
