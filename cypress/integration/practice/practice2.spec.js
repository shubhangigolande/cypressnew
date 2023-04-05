////<reference types="cypress"/>

describe('practice',()=>{

   it.only('methods 4',()=>{
    cy.visit('https://www.amazon.in/s?k=kids+shoes+for+boys+3-4+years&crid=PVX5M4BA03PY&sprefix=kids+shooes+for+boys+%2Caps%2C488&ref=nb_sb_ss_ts-doa-p_6_21')
      cy.wait(4000)
    cy.get('.nav-search-field').type('kids shoes for boys 3-4 years')
    cy.get('#nav-search-submit-button').click()
    cy.get('[data-csa-c-content-id="6741116031"]').children().last().find('span').should('have.class','a-list-item')
   cy.get('.s-line-clamp-1').first().children().first().should('have.class','a-size-base-plus')
   cy.get('.a-section').first().scrollIntoView().find('span').should('have.class','a-size-base a-color-price')

   })
})
