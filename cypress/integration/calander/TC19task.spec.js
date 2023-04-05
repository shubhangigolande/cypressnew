//program 1

// redbus website
describe('verify the date picker functionality ', () => {

    let text=
    it('validate the calender next with cypress', () => {
        let date = new Date()
        let da = date.getDate()
        //cy.log(da)
        date.setDate(date.getDate() + 300)
        let newd = date.getDate()
        cy.log(newd)

        let shortMonth = date.toLocaleString('default', { month: 'short' })
        cy.log(shortMonth)

        let year = date.getFullYear()
        cy.log(year)

            cy.wait(6000)
            cy.visit('https://www.redbus.com/')
       
            cy.get('#onward_cal').click({force: true})
            function selectmonthyear() {
             //year
                cy.get('[class="DayNavigator__IconBlock-sc-1tlckkc-2 eTppvw"]').eq(1).then((el) => {
                   text=el.text()
                    if (!text.includes(year)) {
                        cy.get('#next').click({force: true})
                        selectmonthyear()
                    }
                })

            //month
            cy.get('[class="DayNavigator__IconBlock-sc-1tlckkc-2 eTppvw"]').eq(1).then((el) => {
                text=el.text()
                 if (!text.includes(shortMonth)) {
                     cy.get('#next').click({force: true, multiple:true})
                     selectmonthyear()
                 }
             })
            }
            selectmonthyear() 
           
            // selectDate()
            function selectDate(){
                cy.get('.DayTilesWrapper__DayWrapper-moo2xh-1.loqlv').contains(newd).click({force: true})
            }
            selectDate()
    
    })
 })



// // //program 2
// // //booking website
// // xdescribe('verify the date picker functionality with cypress', () => {
// //     it('validate the calender next', () => {
// //         cy.get('.f9cf783bde').eq(1).find('button').click({ multiple: true })
// //             .wait(5000).should('have.text', 'Check-in dateCheck-out date')
// //         cy.wait(4000)
// //         cy.visit('https://www.booking.com/')


// //         cy.get('[data-testid="date-display-field-start"]').then((el) => {
// //             cy.log(el.text())
// //         })

// //         cy.get('[data-testid="date-display-field-end"]').then((ele) => {
// //             cy.log(ele.text())
// //         })

//     })
// })

// //program 3
// describe('verify the calender', () => {
   
//     it('vAlidate the calender', () => {
//         let date = new Date()

//         date.setDate(date.getDate() + 300)
//         let da = date.getDate()
//         cy.log(da)


//         let mon = date.getMonth()
//         cy.log(mon)

//         let year = date.getFullYear()
//         cy.log(year)

//         cy.wait(7000)
//         cy.visit('https://www.moneycontrol.com/markets/earnings/#')

//         // function monthyear() {
//         //     cy.get('[class="eventCalendar-monthTitle"]').first().then((el) => {
//         //         cy.log(el.text())
//         //         cy.log(typeOf(el.text())) 

//         //         if (!el.text().includes(year)) {
//         //             cy.get('.eventCalendar-arrow.eventCalendar-next').first().click()
//         //             monthyear()
//         //         }
//         //     })
//         // }
//         // monthyear()
//     })
// })
