describe('Verify the cypress traverse methods', () => {

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    it('Prev()', () => {
        cy.get('.search').prev().should('have.class', 'greenLogo')
    })

    it('NextUntil()', () => {
        cy.get('.blinkingText').nextUntil('[href="https://rahulshettyacademy.com/dropdownsPractise/"]').should('have.length', 1)
    })

    it('Parents', () => {
        cy.get('[href="https://rahulshettyacademy.com/dropdownsPractise/"]').parents().should('have.class', 'cart')
        cy.get('[href="https://rahulshettyacademy.com/dropdownsPractise/"]').parents().should('have.class', 'container')
        cy.get('.mobile-search').parents().should('have.length', 7)
    })

    it('ParentsUntil', () => {
        cy.get('[href="https://rahulshettyacademy.com/dropdownsPractise/"]').parentsUntil('#root')
            .should('have.length', 4)
    })

    it('PrevAll', () => {
        cy.get('.cart').prevAll().should('have.length',2)
    })

    it('PrevUntil', () => {
        cy.get('.checkoutKartModal').prevUntil('#root').should('have.length',4)
    })

    it.only('PrevUntil', () => {
       cy.get('.products-wrapper').siblings().should('have.length',4)
       cy.get('.cart-preview').siblings().should('have.length',5)
    })


})