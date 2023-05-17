describe('verify the iframe', () => {
    it('validate the iframe', () => {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((ele) => {
            let body = ele.contents().find('body')
            cy.wrap(body).as('iframebody')
            cy.get('@iframebody').find('a[href="products.html"]').should('be.visible')
            cy.get('@iframebody').find('a[href="products.html"]').should('have.text', 'Our Products')
            cy.get('@iframebody').find('a[href="index.html"]').should('be.visible')
            cy.get('@iframebody').find('a[href="index.html"]').should('have.text', 'Home')
            cy.get('@iframebody').find('a[href="../Contact-Us/contactus.html"]').should('be.visible')
            cy.get('@iframebody').find('a[href="../Contact-Us/contactus.html"]').should('have.text', 'Contact Us')
        })
    })
    it.only('validate the iframe javascript method', () => {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((ele) => {
            cy.log(ele)
             let body2 = ele[0].contentDocument.body
            cy.log(body2)
            cy.wrap(body2).as('iframebody2')
            cy.get('@iframebody2').find('a[href="products.html"]').should('be.visible')
            cy.get('@iframebody2').find('a[href="products.html"]').should('have.text', 'Our Products')
            cy.get('@iframebody2').find('a[href="index.html"]').should('be.visible')
            cy.get('@iframebody2').find('a[href="index.html"]').should('have.text', 'Home')
            cy.get('@iframebody2').find('a[href="../Contact-Us/contactus.html"]').should('be.visible')
            cy.get('@iframebody2').find('a[href="../Contact-Us/contactus.html"]').should('have.text', 'Contact Us')
        })
    })
})