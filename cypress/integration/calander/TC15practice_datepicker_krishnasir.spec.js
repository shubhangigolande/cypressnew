

//DTAEPICKER

xdescribe('verify the date picker', () => {
    it('validate the date paicker', () => {

        cy.visit('https://demo.automationtesting.in/Datepicker.html')
    })
})
//================================================================================
describe('verify the date picker', () => {
    let text =
        it.only('validate the date paicker', () => {
            let date = new Date()
            date.setDate(date.getDate() + 380)
            let da = date.getDate()
            cy.log(da)

            let month = date.toLocaleString('default', { month: 'long' })
            cy.log(month)

            //let month=date.getMonth()
            //cy.log(month)//11(month)

            let year = date.getFullYear()
            cy.log(year)

            cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
            cy.get('.input-group.date').click()
            function selectMonthYeardate() {
                cy.get('[class="datepicker-switch"]').first().then((el) => {
                    text = el.text()
                    if (!text.includes(year)) {
                        cy.get('.next').first().click({ force: true })
                        selectMonthYeardate()
                    }
                })
                cy.get('.datepicker-switch').first().then((el) => {
                    text = el.text()
                    if (!text.includes(month)) {
                        cy.get('.next').first().click()
                        selectMonthYeardate()
                    }
                })

            }
            selectMonthYeardate()
            function selectdate() {
                cy.get('.table-condensed >tbody tr td').contains('da').click({ force: true })

            }
            selectdate()
        })
})

//================================================================================
xdescribe('verify the date picker', () => {
    it('validate the date paicker', () => {

        cy.visit('https://book.spicejet.com/search.aspx')
    })
})