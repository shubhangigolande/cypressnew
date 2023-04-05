
describe('Verify the date picker functionality', () => {

    it('Verify Calender through cypress', () => {


        cy.visit('https://demo.automationtesting.in/Datepicker.html')


        cy.get('#datepicker1').click()
        function selectMonthYear() {
            cy.get('.ui-datepicker-title').then((el) => {
                cy.log(el.text())
                cy.log(typeof (el.text()))
                cy.log(el.text())
                cy.log(typeof (el.text()))
                if (!el.text().includes(year)) {
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    selectMonthYear()
                }
            })
            cy.get('.ui-datepicker-title').then((el) => {
                // cy.log(el.text())
                // cy.log(typeof(el.text()))
                if (!el.text().includes(fullMonth)) {
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    selectMonthYear()
                }
            })

        }
        selectMonthYear()

        function selectDate() {
            cy.get('.ui-state-default').contains(da).click()
        }
        selectDate()


    })
})