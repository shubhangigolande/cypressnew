//MouseActions 
//Click
//RigthClick
//DoubleClick
//MouseOver
//MouseMove
//MouseUp
//MouseDown
//Scrool



describe('Verify the mouse actions',()=>{

    // beforeEach(()=>{
    //     cy.visit('https://testpages.herokuapp.com/styled/drag-drop-javascript.html')
    // })
    // it('verify the scroll action',()=>{
    //     cy.get('[href="https://eviltester.com"]').scrollIntoView().click()
    // })
    // it.only('removing black value',()=>{
    //     cy.get('[href="https://eviltester.com"]').invoke('removeAttr','target').click()
    // })



    
    // it('Verify the scroll action',()=>{
    //     cy.get('[href="https://eviltester.com"]').scrollIntoView().click()
    // })

    // it('Removeing _black value',()=>{

    //     cy.get('[href="https://eviltester.com"]').invoke('removeAttr','target').click()
    // })

    // it('Verify mousedown,mouseup & mouseMove',()=>{
    //     cy.get('#draggable1').trigger('mousedown',{which:1})
    //     cy.get('#droppable1').trigger('mousemove').trigger('mouseup',{force: true})
    //     cy.get('#droppable1 > p').should('have.text','Dropped!')
    // })
    // it('verify the mousedown, & mousemove,& mouseup',()=>{
    //     cy.get('#draggable2').trigger('mousedown',{which:1})
    //     cy.get('#droppable2').trigger('mousemove').trigger('mouseup',{force: true})
    //     cy.get('#droppable2 >p').should('have.text','Dropped!')
   // })
   
   //mousehover
   it('verify the mouseover functionality', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('[data-csa-c-content-id="nav_ya_signin"]').trigger('mouseover')
    cy.contains('Find a List or Registry').click()
    cy.url().should('include', 'nav_ListFlyout_find')
    //https://www.amazon.com/hz/wishlist/intro
})

it.only('verify the mouse over functionality',()=>{
    cy.wait(6000)
    cy.visit('https://www.amazon.com/')
    cy.get('[data-csa-c-slot-id="nav-link-accountList"]').trigger('mouseover')
    cy.get('.nav-link span').last().should('have.text','Music Library')
    
    cy.get('.nav-link span').last().click({force:true})
    cy.wait(4000)
    cy.url().should('include','https://music.amazon.com/?ref=nav_youraccount_cldplyr')
   
    


})
   

})