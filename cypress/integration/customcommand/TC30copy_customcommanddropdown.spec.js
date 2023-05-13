// Two types DropDown
// 1 ) Static DropDown ==> Fix options
// 2) Dynyamic Dropdown ==>  Auto suggestions 


describe('Verify the Dropdown in cypress',()=>{
    it('Verify the Dynyamic dropdown',()=>{
        cy.visit('https://codenboxautomationlab.com/practice/')

        cy.staticdropdown('Ind','India')
       


    })
})