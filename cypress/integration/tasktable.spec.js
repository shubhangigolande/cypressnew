describe('validate the tables', () => {

    it('verify the tables', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')

        cy.get('#thumbnail-1 table').children().each((el,index) => {
            cy.log(el.text())
            if(index!=0){
                cy.log(el.find('tbody').children().eq(2))
            }
        })
    })
})