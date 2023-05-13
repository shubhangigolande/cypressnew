//# Type of popup/alert  ---->

// I. popup from DOM =>  e.g. Notification popups

// II. popup from window =>
// 1.Alert popup --> Validating String

// 2.prompt popup  --> Types of prompt on user inputs =>
// confirm -> true = ok, false = cancel
// User can pass input from UI

///<reference types="cypress"/>

Cypress.on("uncaught:exception", () => {
    return false;
});

describe("Cypress commands for handel elements which is outside the DOM", () => {
    it("validate browser page title", () => {
              cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
              cy.title().then(title => {
                        cy.log(title)
                        expect(title).to.eql("WebDriver | Popups & Alerts")
              });
    });

    it("validate browser page url", () => {
              cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
              cy.url().then(url => {
                        cy.log(url);
                        expect(url).to.eql("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
              });
              // cy.url().should("contain", "http://www.webdriveruniversity.com/Popup-Alerts/index.html");
              cy.url().should("includes", "http://www.webdriveruniversity.com/Popup-Alerts/index.html");
              // cy.url().should("have.text", "http://www.webdriveruniversity.com/Popup-Alerts/index.html");
    });


    it("Get DOM object", () => {
              cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html");
              cy.document().then(doc => {
                        cy.log(doc)
              });
    });
});



// Interview Que. --> What is Diff. b/t Cypress & cy
