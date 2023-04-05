
import 'cypress-file-upload';
describe('validate the file upload',()=>{
    it('file single upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('shivansh.png')
        cy.get('#file-submit').click()
        cy.get('.example > h3').should('have.text','File Uploaded!')
        cy.get('#uploaded-files').contains('shivansh.png--,m')
    })
    it.only('verify the multiple files uploaded',()=>{
        let files=['ansh1.png','ansh_drawing.png','shivansh.png']
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('[name="filesToUpload"]').attachFile(files)
        cy.get('[name="filesToUpload"]').click()
        cy.get('#fileList').children().should('have.length',3)

    })
    it('verify the change files uploaded',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'shivansh.png',fileName:'shiv.png'})
        cy.get('#file-submit').click()
        cy.get('.example > h3').should('have.text','File Uploaded!')
        cy.wait(4000)
        cy.get('#uploaded-files').contains('shiv.png')
       
    })

})