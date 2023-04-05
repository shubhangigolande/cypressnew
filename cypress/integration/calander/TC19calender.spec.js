// xdescribe('Verify the date picker functionality', () => {

//     // it('Verify Calender through cypress',()=>{
//     //     let date = new Date()
//     //     date.setDate(date.getDate() + 200)
//     //     let da = date.getDate()// current date
//     //     let month = date.getMonth()//Return current month index
//     //     //jan = 0 feb = 1 march = 2
//     //     let fullMonth = date.toLocaleString('default',{month:"long"})
//     //     let fullMonth2 = date.toLocaleString('default',{month:"short"})
//     //     let year = date.getFullYear()

//     //     cy.log(da)
//     //     //cy.log(month)
//     //     cy.log(fullMonth)
//     //     //cy.log(fullMonth2)
//     //     cy.log(year)

//     // })

// it('verify the calender through the cypress', () => {
//     let date=new Date()
//     let da=date.getDate()
//     cy.log(da) //current date print

// let mn= date.getMonth() 
// cy.log(mn) //current date month print (month is print for index wise number) // current month print 2
// jan  feb   mar  apr  may   jun   july   aug  sep   oct   nov   dec
//  0    1     2    3    4     5     6      7    8     9    10    11 
// let fullmonth1=date.toLocaleString('default',{month:"long"})
// cy.log(fullmonth1)

// let year=date.getFullYear()
// // cy.log(year)

// date.setDate(date.getDate()+34) // update the current date
// let newdate=date.getDate() //updated new date
// cy.log(newdate) // new date print

// // let month=date.getMonth() // new date month print
// // cy.log(month)

// let fullmonth=date.toLocaleString('default',{month:"long"})
// cy.log(fullmonth)

// let year1=date.getFullYear()
// cy.log(year1)
//  })
//})


describe('verify the dtae picker functionality ', () => {

      
       
    it('validate the calender next with cypress', () => {
        let date = new Date()
        //let da = date.getDate()
        //update the current date for 300 days after
        date.setDate(date.getDate() + 300)
        let newd = date.getDate()
        cy.log(newd)
        let fullmonth = date.toLocaleString('default', { month: "long" })
        cy.log(fullmonth)

        let year = date.getFullYear()
        cy.log(year)

        cy.visit('https://demo.automationtesting.in/Datepicker.html')
 
        cy.get('#datepicker1').click()

        function selectMonthYear() {
            cy.get('.ui-datepicker-title').then((el) => {
                cy.log(el.text())
                cy.log(typeof (el.text()))
                if (!el.text().includes(year)) {
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    selectMonthYear()
                }
            })
        //     cy.get('.ui-datepicker-title').then((el) => {
        //         //cy.log(el.text())
        //        // cy.log(typeof (el.text()))
        //         if (!el.text().includes(fullmonth)) {
        //             cy.get('.ui-datepicker-next.ui-corner-all').click()
        //             selectMonthYear()
        //         }
        //     })
        }
        selectMonthYear()

       
        // function selectDate(){
        //     cy.get('.ui-state-default').contains(newd).click()
        // }
        // selectDate()


    })

   
})

