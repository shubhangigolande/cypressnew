
describe('practice',()=>{
  // Cypress.on('uncaught:exception',(err,runnable)=>{
  //   return false
  //   })

it.skip('methods1',()=>{
    cy.visit('https://www.amazon.com/')
  
    cy.get('.nav-search-field').children().first().should('have.text','Search Amazon')
    cy.get('#nav-search-submit-text').parents().should('have.length',11)
    cy.get('.nav-fill').eq(1).should('be.visible')
    cy.get('.nav-fill').eq(2).should('be.visible')
    cy.get('div[id="nav-tools"]').children().should('have.length',4)
  })

  it.skip('methods2',()=>{
    cy.visit('https://www.amazon.com/')
    cy.wait(4000)
    cy.get('.nav-right').parent().should('have.id','nav-belt')
    cy.get('#nav-belt').next().should('have.id','nav-flyout-iss-anchor')
    cy.get('#nav-belt').next('div').last().should('have.id','nav-flyout-iss-anchor')
  })

  it.skip('methods3',()=>{
    cy.visit('https://www.amazon.com/')
    cy.wait(6000)
    cy.get('#navbar-main').children().find('div').should('have.length',182)
    cy.get('#nav-main').filter('div').should('have.length',1)
    cy.get('.nav-right').first().closest('form').should('have.class','nav-searchbar')
    cy.get('div[id=navbar]').nextAll().should('have.length',0)
    cy.get('.nav-left').first().nextAll().should('have.length',2)

   })



})