describe('Verify the contact us functionality',()=>{

    it('Validate contact us funvctionality',()=>{
        //Step1 Visit the apps
        cy.visit('https://codenboxautomationlab.com/contact/')

        //step 2 Find NameField css selector nd perform type action
        cy.get('#nf-field-1').type('Mahesh Aher')

        //step 3 Find emailField css selector nd perform type action
        cy.get('#nf-field-2').type('ABC@gmail.com')

        //step 4 Find msgField css selector nd perform type action
        cy.get('[id="nf-field-3"]').type('Hello I am Mahesh from Minskole')

        //Step 5 click on submit button
        cy.get('#nf-field-4').click()
        cy.wait(17000)//5 sec

        //Step 6 Validate the sucess msg
       // cy.get('.nf-response-msg').children().first().should('have.text','Form submitted successfully.')
       cy.wait(4000)
        cy.get('.nf-response-msg > p').should('contain','Form submitted successfully.')
    })
})