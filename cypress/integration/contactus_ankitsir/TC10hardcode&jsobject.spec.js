///<reference types="cypress"/>
describe('fixtures', () => {
    let obj1=[{
        firstName:'ankit',
        lastName:'testLastName1',
        email:"testEmail@gmail.com",
        msg:"this is test data",
        successMsg:'Thanks for contacting us! We will get in touch with you shortly.'
    },{
        firstName:'test123',
        lastName:'testLastName2',
        email:"testEmail2@gmail.com",
        msg:"this is test datdsadasdsadsaa2",
        successMsg:'Thanks for contacting us! We will get in touch with you shortly.'
    }] 
    // it('hardcoded values',()=>{
    //     cy.visit('https://www.weifieldcontracting.com/contact/')
    //     cy.get('[name="input_1.3"]').type('testName')

    //     cy.get('[name="input_1.6"]').type('testLastName')

    //     cy.get('#input_2_2').type('test@gmail.com')

    //     cy.get('#input_2_3').type('test msgtest msgtest msgtest msgtest msgtest msgtest msg')

    //     cy.get('#gform_submit_button_2').click()
    
    //     cy.get('#gform_confirmation_message_2').should('have.text','Thanks for contacting us! We will get in touch with you shortly.')
    // })
    // it('hardcoded values for single object',()=>{
    //     cy.visit('https://www.weifieldcontracting.com/contact/')
    //     cy.get('[name="input_1.3"]').type(obj1[0].firstName)
    //     cy.get('[name="input_1.6"]').type(obj1[0].lastName)
    //     cy.get('#input_2_2').type(obj1[0].email)
    //     cy.get('#input_2_3').type(obj1[0].msg)
    //     cy.get('#gform_submit_button_2').click()
    //     cy.get('#gform_confirmation_message_2').should('have.text',obj1[0].successMsg)
    // })
    it('executing test case for multiple data',()=>{
        obj1.forEach((el)=>{
            cy.visit('https://www.weifieldcontracting.com/contact/')
            cy.get('[name="input_1.3"]').type(el.firstName)
            cy.get('[name="input_1.6"]').type(el.lastName)
            cy.get('#input_2_2').type(el.email)
            cy.get('#input_2_3').type(el.msg)
            cy.get('#gform_submit_button_2').click()
            cy.get('#gform_confirmation_message_2').should('have.text',el.successMsg)
        })
    })
});