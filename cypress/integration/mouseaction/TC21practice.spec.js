// //Two types DropDown
// //1 ) Static DropDown ==> Fix options
// //2) Dynyamic Dropdown ==>  Auto suggestions 


// describe('Verify the Dropdown in cypress',()=>{
    
//     it.only('Verify the dropdown',()=>{
//         cy.visit('https://www.google.com/')
//         cy.get('.gLFyf')
        
       
//     })
//     it.only('verify the dynamic dropdown', () => {
//         cy.visit('https://www.google.com/')
//         cy.get('.gLFyf').eq(0).type('Cyp')
//         cy.wait(4000)
//         cy.get('.wM6W7d').children().each((el) => {
//         let textContent = el.text()
//             cy.log(textContent)
//             if (textContent==="cypress") {
//                 cy.get(el).click()
//             }
//         })
// })