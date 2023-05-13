describe("Automate calender", () => {
  Cypress.on("uncaught:exception", () => {
            return false;
  });

  it.only("Automate SpiceJet Date calender for Depart date & Return date", () => {
            // Depart Date
            cy.log("##----------Depart Date-----------##");
            let DDate = new Date();
            DDate.setDate(DDate.getDate() + 275);
            let dDate = DDate.getDate();
            let dMonth = DDate.getMonth();
            dMonth = DDate.toLocaleString("default", { month: "long" });
            let dYear = DDate.getFullYear();
            cy.log(dDate, dMonth, dYear);

            cy.wait(6000)
            cy.visit("https://book.spicejet.com/");
            cy.get("#custom_date_picker_id_1").first().siblings("button").click({ force: true });

            function SelectYear(index, Year) {
                      cy.get(".ui-datepicker-title").eq(index).then(year => {
                                // cy.log(Year);
                                // cy.log(year.text());
                                // cy.log(!year.text().includes(Year));
                                if (!year.text().includes(Year)) {
                                          cy.get(".ui-datepicker-next.ui-corner-all").then(nextBtn => {
                                                    cy.wrap(nextBtn).click({ force: true });
                                                    nextBtn.hasClass("ui-state-disabled") ? SelectYear(1, Year) : SelectYear(0, Year)
                                          });
                                };
                      });
            };

            function SelectMonth(index, Month) {
                      return cy.get(".ui-datepicker-title").eq(index).then(month => {
                                // cy.log(month.text());
                                // cy.log(!month.text().includes(Year));
                                if (!month.text().includes(Month)) {
                                          cy.get(".ui-datepicker-next.ui-corner-all").then(nextBtn => {
                                                    cy.wrap(nextBtn).click({ force: true });
                                                    nextBtn.hasClass("ui-state-disabled") ? SelectMonth(1, Month) : SelectMonth(0, Month)
                                          });

                                };
                      });
            };

            SelectYear(0, dYear);
            SelectMonth(0, dMonth).then(month => {
                      cy.wrap(month).parent("div").siblings("table").find(".ui-state-default").each(date => {
                                // cy.log(date.text() == dDate);
                                if (date.text() == dDate) {
                                          cy.wrap(date).click({ force: true });
                                };
                      });
            });

            // //------------------------------------------------------------------------

            // // Return Date
            cy.log("##----------Return Date-----------##");
            let RDate = new Date();
            RDate.setDate(RDate.getDate() + 320);
            let rDate = RDate.getDate();
            let rMonth = RDate.getMonth();
            rMonth = RDate.toLocaleString("default", { month: "long" });
            let rYear = RDate.getFullYear();
            cy.log(rDate, rMonth, rYear);

            cy.get("#custom_date_picker_id_2").last().click({ force: true });
            SelectYear(0, rYear);
            SelectMonth(0, rMonth).then(month => {
                      cy.wrap(month).parent("div").siblings("table").find(".ui-state-default").each(date => {
                                // cy.log(date.text() == rDate);
                                if (date.text() == rDate) {
                                          cy.wrap(date).click({ force: true });
                                };
                      });
            });
         });
});