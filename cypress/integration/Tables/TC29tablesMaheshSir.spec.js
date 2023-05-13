// describe('verify tables', () => {
//     let sum = 0
//     it('validate tables', () => {
//         cy.visit('https://testautomationpractice.blogspot.com/')
//         cy.get('[name="BookTable"]').find('tbody').children().each((el, index) => {
//             cy.log(el.text())
//             if (index != 0) {
//                 // cy.log(el.children().last().text())
//                 // cy.log(typeOf(el.children().last().text()))
//                // cy.log(typeOf(Number(el.children('td').last().text())))
//                 sum = sum + Number(el.children('td').last().text())
//             }
//         }).then(()=>{
//             cy.log(sum)
//             expect(sum).to.eq(7100)
//         })
//     })

// it('Verify the Authers Name from the table',()=>{
//     //                 0      1        2         3       4       5
//     let autherName = ['','Amit','Mukesh','Animesh','Mukesh','Amod','Amit']
//     cy.get('[name="BookTable"]').find('tbody').children().each((el,index)=>{
//         cy.log(el.text())
//         if(index != 0 ){
//             cy.get(el).children().eq(1).should('have.text',autherName[index])
//         }      
//     })
// })

// })

describe('Validate the tables', () => {
    beforeEach(()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
    })
    let sum = 0
    it('Verify the total sum price colum', () => {
        
        cy.get('[name="BookTable"]').find('tbody').children().each((el, index) => {
            //cy.log(el.text())
            if (index != 0) {
                sum = sum + Number(el.children('td').last().text())
            }
        }).then(()=>{
            expect(sum).to.eq(7100)
            //cy.log(sum)
        })
    })

    it('Verify the Authers Name from the table',()=>{
        //                 0      1        2         3       4       5
        let autherName = ['','Amit','Mukesh','Animesh','Mukesh','Amod','Amit']
        cy.get('[name="BookTable"]').find('tbody').children().each((el,index)=>{
            cy.log(el.text())
            if(index != 0 ){
                cy.get(el).children().eq(1).should('have.text',autherName[index])
            }      
        })
    })

    it.only('Verify the subject Name from the table',()=>{
        //                 0      1        2         3       4       5
        let subject = ['','Selenium','Java','Javascript','Selenium','JAVA','Javascript']
        cy.get('[name="BookTable"]').find('tbody').children().each((el,index)=>{
            cy.log(el.text())
            if(index != 0 ){
                cy.get(el).children().eq(2).should('have.text',subject[index])
            }      
        })
    })

    it('Verify the subject Name from the table',()=>{
        //                 0      1        2         3       4       5
        let BookName = ['','Learn Selenium','Learn Java','Learn JS	','Master In Selenium	','Master In Java','Master In JS']
        cy.get('[name="BookTable"]').find('tbody').children().each((el,index)=>{
            cy.log(el.text())
            if(index != 0 ){
                cy.get(el).children().eq(0).should('have.text',BookName[index])
            }      
        })
    })
})