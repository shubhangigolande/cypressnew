///<reference types="cypress"/>
import login from "./pom2.spec"
describe("", () => {
    //normal
    it("", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder=Username]").type("Admin")
        cy.get("input[placeholder=Password]").type("admin123")
        cy.get('button[type="submit"]').click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", "Dashboard")
    })


    //using pom
    it("pom", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln = new login()

        ln.setusername("Admin")
        ln.userpassword("admin123")
        ln.clickbutton()
        ln.verifylogin()

    })

    //using fixture
    it.only("fixture", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('fixturepom.json').then((data) => {
            const ln = new login()

            ln.setusername(data.username)
            ln.userpassword(data.password)
            ln.clickbutton()
            ln.verifylogin()
        })
    })
})