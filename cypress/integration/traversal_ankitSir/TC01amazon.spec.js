
///mocha //bdd
//Test Scenario ?=> what to test 
//test case ==> how to test

//mocha
describe("test search functionlaity of Amazon",function(){
    it('tc01-verify seach functionlity',function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('I phone 14')
        cy.get('#nav-search-submit-button').click()
    })
})
