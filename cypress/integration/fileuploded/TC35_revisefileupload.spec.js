describe('Validate File uplode functionality',()=>{
    let file = 'Capture.PNG'
    it('Veridy singal file uplode',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile(file)
        cy.get('#file-submit').click()
        cy.get('[class="example"] >h3').should('be.visible')
        cy.get('[class="example"] >h3').should('have.text','File Uploaded!')
        cy.get('#uploaded-files').should('be.visible')
        cy.get('#uploaded-files').should('contain','Capture')
    })

    it('Varify multiple file uplode',()=>{
                    //    0               1            2
        let files = ['Capture.PNG','Minskole.png','New (1).png']
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(files)
        cy.get('#fileList > li').should('have.length',3)
        cy.get('#fileList > li').each((el,index)=>{
            cy.get(el).should('contain',files[index])
        })
    })

    it.only('Veridy singal file uplode',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:"Capture.PNG",fileName:"Mahesh.PNG"})
        cy.get('#file-submit').click()
        cy.get('[class="example"] >h3').should('be.visible')
        cy.get('[class="example"] >h3').should('have.text','File Uploaded!')
        cy.get('#uploaded-files').should('be.visible')
        cy.get('#uploaded-files').should('contain','Mahesh')
    })
})