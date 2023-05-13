it("What is Diff. b/t Cypress & cy", () => {
    // cy.stub(object,method)
    // what is Object?  --> js data type whos store data more iteratively/ Descriptive form
    // Object ---> key/Properties & Values
    // Values => Have diff types --> String, no, function
    // what is Method?  -->
    // let kk = {
    //         Name: "ABC",
    //         MobNo: 10,
    //         write: function () {
    //                 console.log("HI I am METHOD")
    //         }
    // }
    // kk.write()

    // Interview Que. --> What is Diff. b/t Cypress & cy
    // Ans.
    // Cypress --> Object
    // cy ---> Method of cypress

    cy.log(Cypress)
    //  cy.get()
    //  cy.contains()
    //  url
    //  window
    cy.log(cy)
    // window global object  --> Browser ---> Cypress

    // Cypress --> Cy--> Window
    //            ---> get, contains, url,-----
});

it("cy.reload() command", () => {
    cy.visit("https://example.cypress.io/commands/actions?");
    cy.reload()
    cy.get("select.action-select-multiple").select(["fr-apples", "fr-oranges"])
});

it("cy.go() command", () => {
    // cy.go(string/number)
    // cy.go("forward")  // cy.go(1)
    // cy.go("back") // cy.go(-1)

    cy.visit("https://practice.automationbro.com/cart/");  // cart page
    cy.get("#menu-item-489").click();  // Home page
    // cy.go("back");  // cart page
    cy.go(-1);
    // cy.go("forward");  // home page
    cy.go(1);
});

it("cy.pause() command", () => {
    // cy.pause() --> pause the test script
    // use for debugging
    cy.visit("https://practice.automationbro.com/cart/");  // cart page
    cy.get("#menu-item-489").click();  // Home page
    cy.go(-1);
    cy.pause()
    cy.go(1);
});

it("cy.screenshot() command", () => {
    // cy.pause() --> pause the test script
    // use for debugging
    cy.visit("https://practice.automationbro.com/cart/");  // cart page
    cy.get("#menu-item-489").click();  // Home page
    cy.go(-1);
    cy.screenshot()
    cy.go(1);
});

// WE was covered already ---->
//           cy.clear()  -->  to clear input box/ user input
//           cy.trigger(eventName, x, y, options)   --> handel events
//           cy.as()  --> cypress variable
//           cy.wrap()  ---> wrap object (converting object into cypress object)
//           cy.invoke()  //Name of function to be invoked.


//           cy.viewport()
it("cy.viewport() command", () => {

});


//           cy.its(propertyName, options)
//           cy.invoke()  //Name of function to be invoked.
//           cy.task()
