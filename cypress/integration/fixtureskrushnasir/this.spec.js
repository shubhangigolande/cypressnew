////<reference types="cypress"/>


describe('Fetch data from fixture file using cypress fixture method', function (){
    //eg-> access fixture data by this keyword
    // before('get fixture data using this keyword', () => {
    //     cy.fixture('data1').then((fixData)=>{
    //         this.fixData = fixData
    //     })   
    // })
    // it.only('this keyword', () => {
    //     cy.visit('https://www.weifieldcontracting.com/contact/')
    //     cy.get('[name="input_1.3"]').type(this.fixData.firstName)
    //     cy.get('[name="input_1.6"]').type(this.fixData.lastName)
    // })

    before('get fixture data using this keyword',function(){
        cy.fixture('data1').then(function(fixData){
            this.fixData = fixData
        })   
    })
    it.only('this keyword',function(){
        cy.visit('https://www.weifieldcontracting.com/contact/')
        cy.get('[name="input_1.3"]').type(this.fixData.firstName)
        cy.get('[name="input_1.6"]').type(this.fixData.lastName)
    })


}) 
