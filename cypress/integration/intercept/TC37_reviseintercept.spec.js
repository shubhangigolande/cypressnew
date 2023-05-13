describe('Validate Api request using cy.intercept',()=>{
    it('Validate GET Api using cy.intercept',()=>{
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('GetRequest')
        cy.get('.btn-primary').click()
        cy.wait('@GetRequest')
        cy.get('.network-comment').should('be.visible')
        cy.get('.network-comment').should('contain','laudantium enim quasi est quidem magnam')
    })

    it('Validate GET Api using cy.intercept',()=>{
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('GetRes')
        cy.get('.btn-primary').click()
        cy.wait('@GetRes').then((res)=>{
            cy.log(res)
            expect(res.response.statusCode).to.eq(200)
            expect(res.response.body.email).to.eq("Eliseo@gardner.biz")
        })
        cy.get('.network-comment').should('be.visible')
        cy.get('.network-comment').should('contain','laudantium enim quasi est quidem magnam')
    })

    it.only('Validate GET Api using cy.intercept',()=>{
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        }).as('PostRes')
        cy.get('[class="network-post btn btn-success"]').click()
        cy.wait('@PostRes').then((res)=>{
            cy.log(res)
            expect(res.response.statusCode).to.eq(201)
            expect(res.response.body).to.have.all.keys('id','email','name','body')
        })
        cy.get('.network-post-comment').should('be.visible')
        cy.get('.network-post-comment').should('have.text','POST successful!')
    })
})