////<reference types="cypress"/>

describe('verify fixtures', ()=>{
   let aa=[
        {
        firstname:"shubhangi",
        email:"abc@gmail.com",
        msg:"hello",
        smsg:"Form submitted successfully."
    },
    {
        firstname:"shital",
        email:"abc@gmail.com",
        msg:"hello",
        smsg:"Form submitted successfully."
    }]

    // console.log(aa[0][1])
    // aa.firstname="varsha"
    // console.log(aa[0])
    // console.log(aa.email)

it('verify the fixture with normal obj',()=>{
    //1=> visit the website
    cy.visit('https://codenboxautomationlab.com/contact/')
    cy.wait(6000)
    //find input box your name
    cy.get('[name="nf-field-1"]').type(aa[0].firstname)
    //find inputbox email
    cy.get('[name="email"]').type(aa[0].email)
    //find inputbox msg
    cy.get('[name="nf-field-3"]').type(aa[0].msg)
    //click submit button
    cy.get('#nf-field-4').click()
    //click submit button the confirmation msg
    cy.get('.nf-response-msg > p').should('have.text',aa[0].smsg)

})

it.only('verify the fixture with multiple data obj',()=>{
    //1=> visit the website
    aa.forEach((el)=>{
    cy.visit('https://codenboxautomationlab.com/contact/')
    
    //find input box your name
    cy.get('[name="nf-field-1"]').type(el.firstname)
    //find inputbox email
    cy.get('[name="email"]').type(el.email)
    //find inputbox msg
    cy.get('[name="nf-field-3"]').type(el.msg)
    //click submit button
    cy.get('#nf-field-4').click()
    //click submit button the confirmation msg
    cy.wait(4000)
    cy.get('.nf-response-msg > p').should('have.text',el.smsg)
    })
})
})