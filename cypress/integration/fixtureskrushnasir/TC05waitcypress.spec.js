// wait in cypress ==>

// Inter questions -->
// 1. Types of wait in cypress ?
// 2. What is implicit wait in cypress ?
// 3. What is explicit wait in cypress ?

// 1. static wait  / implicit wait  ==>
// we also can called Dead wait in cypress

// cy.wait(time/aliases, options)
// time -> is in milliseconds.
// aliases -> for dynamic wait. [ We can pass aliaes array here for multiple requests ]


it(" 1. static/implicit wait", () => {
    cy.visit('https://www.weifieldcontracting.com/contact/')
    cy.get('[name="input_1.3"]').as("element");
    cy.wait(2000);
    cy.get("@element").type(" RAM ");
    cy.get("@element").should("have.value", " RAM ");
    cy.get("@element").clear();
    cy.get("@element").should("have.value", "");
});


// Js --> Default Syn

// DisAdv (Asyn) ==> Takes more time for responce

// Cypress commands ---> Async

// Async ---> API Call
// Adv (Asyn) ==> Fast execution

// Cypress Execution ----> Sync

// 2. Dynamic wait     // Explicit wait ==>
// cy.intercept(request type,url)  

it.only(" 2. Dynamic/Explicit wait", () => {
    cy.visit('https://www.weifieldcontracting.com/contact/')
    cy.get('[name="input_1.3"]').as("element");
    // cy.wait(2000);
    cy.intercept("GET", "https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true").as("DynamicWait")
    cy.wait("@DynamicWait")
    cy.get("@element").type(" RAM ");
    cy.get("@element").should("have.value", " RAM ");
    cy.get("@element").clear();
    cy.get("@element").should("have.value", "");
});
