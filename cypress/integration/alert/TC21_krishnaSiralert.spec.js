///<reference types="cypress"/>

Cypress.on("uncaught:exception", () => {
    return false;
});

describe("Cypress commands for handel elements which is outside the DOM", () => {
       it("Get window object", () => {
            cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
            cy.get("#button1").click()
            cy.window().then(win => {
                    cy.log(win)
            });

            // cy.on("window:alert", str => {
            //           cy.log(str)
            // })
    });

    it("listen window alert event object", () => {
            cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
            cy.get("#button1").click()
            cy.on("window:alert", str => {
                    expect(str).to.eql("I am an alert box!")
                    cy.log(str)
                    // expect(str).to.be.called
            })

            // cy.on("window:alert")
    });

    it("listen window prompt event for OK/true", () => {
            cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
            cy.get("#button4").click()
            cy.on("window:confirm", conf => {
                    // return == user input or prompt input
                    return true
            });
            cy.get("#confirm-alert-text").should("have.text", "You pressed OK!");  //You pressed Cancel!
    });

    it("listen window prompt event for cancel/false", () => {
            cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
            cy.get("#button4").click()
            cy.on("window:confirm", conf => {
                    // return == user input or prompt input
                    return false
            })
            cy.get("#confirm-alert-text").should("have.text", "You pressed Cancel!");  //You pressed Cancel!
    });

    // cy.stub(object,method)
    // what is Object?
    // what is Method?

    it.only("Handel window prompt popup", () => {
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
            cy.window().then(win => {
                    cy.stub(win, "prompt").returns("Hi I am")
                    // cy.log(win.prompt())
                    // cy.log(win)
            });
            cy.get(".example ul li:nth-child(3) button").click();
            cy.get("#result").should("have.text", "You entered: Hi I am");  //You pressed Cancel!

            //===============================
            // cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            // cy.window().then((el)=>{
            //     cy.stub(el,'prompt').returns('Mahesh Aher')
            // })
            // cy.get('button[onclick="jsPrompt()"]').click()
            // cy.get('#result').should('contain','Mahesh Aher')
        });
});
