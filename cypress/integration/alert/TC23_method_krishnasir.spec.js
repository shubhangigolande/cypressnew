// WE was covered already ---->
        //           cy.clear()  -->  to clear input box/ user input
        //           cy.trigger(eventName, x, y, options)   --> handel events
        //           cy.as()  --> cypress variable
        //           cy.wrap()  ---> wrap object (converting object into cypress object)


        //cy.viewport()
        it("cy.viewport() command", () => {
            // cy.viewport(diviceName/innerWidth,Hight,mode)
            cy.visit("https://demoblaze.com/")
            cy.wait(4000)
            // cy.viewport(800, 450)
            cy.viewport("iphone-6")
    });

    //cy.its(propertyName, options)  // eg. keyName, length
    it("cy.its() command", () => {
            // cy.its(propertyName, options) 
            let a = {
                    FName: "kk",
                    MobNo: 100
            }
            cy.wrap(a).its("FName").then(el => cy.log(el))
            cy.wrap([1, 2, 3, 4]).its(1).then(el => cy.log(el))
            cy.wrap([1, 2, 3, 4]).its("length").then(el => cy.log(el))
    });


    // cy.invoke(options, functionName, args...)  //Name of function to be invoked(jQuery functions are used).
    it.only("cy.its() command", () => {
            // cy.invoke(options, functionName, args...)
            // functionName == methodName ---> jQuery --> js lib
            cy.visit("https://demoblaze.com/")
            cy.wait(4000)
            // get html element text
            // cy.get("#nava").invoke("text").then(el=>cy.log(el)) 

            // get id,class,href value     
            // cy.get("#nava").invoke("attr","id").then(el=>cy.log(el))  
            // cy.get("#nava").invoke("attr","class").then(el=>cy.log(el))
            // cy.get("#nava").invoke("attr","href").then(el=>cy.log(el)) 
            // cy.get("#nava").invoke("removeAttr","href").then(el=>cy.log(el)) // remove the attribute from html element

            // can update the attribute values
            cy.get("#nava").invoke("attr", "id", "Hi I am cypress learner").should("have.attr", "id", "Hi I am cypress learner");
        });