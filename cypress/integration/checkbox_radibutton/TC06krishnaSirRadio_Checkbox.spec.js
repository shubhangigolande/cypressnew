///<reference types="cypress"/>

// User actions (user inputs) -->

// click
// dblclick
// rightclick
// type
// clear
// check
// uncheck
// select
// drag-drop
// scroll
// mouseactions
// keyPress

// Input tags recives inputs from users

// .check() --> 1.CheckBox  2.RadioButton
// .click() --> 1.CheckBox  2.RadioButton

// Question ==>
//1. Difference bt CheckBox & RadioButton
//2. Difference bt .Check() & .Click()

// .check(value/values, options)
// .uncheck(value/values, options)

//1. Assert empty check box, Check check box & assert
//2. Check multiple checkbox & assert, Uncheck & assert
//3. Check check box with click  
//4. Difference between check & Click
cy.log('hh')
describe("Handel Check box", () => {
    it("1. Assert default check boxs", () => {
            //   cy.visit("http://www.tizag.com/htmlT/htmlcheckboxes.php");
            //   cy.get("[value='soccer']").first().should("not.be.checked");
            //   cy.get("[value='soccer']").eq(1).should("be.checked");
    });

    it("2. Change default conditions of check boxs & assert", () => {
              cy.visit("http://www.tizag.com/htmlT/htmlcheckboxes.php");
              cy.get("[value='soccer']").first().check().should("be.checked");
              cy.get("[value='soccer']").eq(1).uncheck().should("not.be.checked");
    });

    it("3. Check check boxes with click action", () => {
              cy.visit("http://www.tizag.com/htmlT/htmlcheckboxes.php");
              cy.get("[value='soccer']").eq(1).should("be.checked");
              cy.get("[value='soccer']").eq(1).click().should("not.be.checked");
              // After the click action condition will be opposite
              cy.get("[value='soccer']").eq(1).check().should("be.checked");
              // Check will mainten check condition
    });

    it.only("4. Validate multiple Check check boxes ", () => {
            //   cy.visit("http://www.tizag.com/htmlT/htmlcheckboxes.php");
            //   // cy.get("[value='soccer']").eq(0).check().should("be.checked");
              
            //   // With css
            //    cy.get("[type='checkbox']").check().should("be.checked");

            //   // with check command
            //    cy.get("[type='checkbox']").check("football").should("be.checked");

              // we can pass array to check
            //    
            cy.get("[type='checkbox']").check(["football", "baseball"]).should("be.checked");
         });
});
