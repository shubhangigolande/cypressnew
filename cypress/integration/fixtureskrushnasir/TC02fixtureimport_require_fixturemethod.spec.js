/////<reference types="cypress"/>

//1   //import fixtData from '../../fixtures/user.json'
//2  //const fixtData = require('../../fixtures/user.json');
//3  /*cy.fixture('user').then(function(fixtData){
//this.fixtData=fixtData
//})*/


// xdescribe('fixtures',() => {

//     let obj1 = [{
//               firstName: 'ankit',
//               lastName: 'testLastName1',
//               email: "testEmail@gmail.com",
//               msg: "this is test data",
//               successMsg: 'Thanks for contacting us! We will get in touch with you shortly.'
//     }, {
//               firstName: 'test123',
//               lastName: 'testLastName2',
//               email: "testEmail2@gmail.com",
//               msg: "this is test datdsadasdsadsaa2",
//               successMsg: 'Thanks for contacting us! We will get in touch with you shortly.'
//     }]

// it('hardcoded values',()=>{
//     cy.visit('https://www.weifieldcontracting.com/contact/')
//     cy.get('[name="input_1.3"]').type('testName')
//     cy.get('[name="input_1.6"]').type('testLastName')
//     cy.get('#input_2_2').type('test@gmail.com')
//     cy.get('#input_2_3').type('test msgtest msgtest msgtest msgtest msgtest msgtest msg')
//     cy.get('#gform_submit_button_2').click()
//     cy.get('#gform_confirmation_message_2').should('have.text','Thanks for contacting us! We will get in touch with you shortly.')
// })

// it('hardcoded values for single object',()=>{
//     cy.visit('https://www.weifieldcontracting.com/contact/')
//     cy.get('[name="input_1.3"]').type(obj1[0].firstName)
//     cy.get('[name="input_1.6"]').type(obj1[0].lastName)
//     cy.get('#input_2_2').type(obj1[0].email)
//     cy.get('#input_2_3').type(obj1[0].msg)
//     cy.get('#gform_submit_button_2').click()
//     cy.get('#gform_confirmation_message_2').should('have.text',obj1[0].successMsg)
// })

//     it('executing test case for multiple data', () => {
//               obj1.forEach((el) => {
//                         cy.visit('https://www.weifieldcontracting.com/contact/')
//                         cy.get('[name="input_1.3"]').type(el.firstName)
//                         cy.get('[name="input_1.6"]').type(el.lastName)
//                         cy.get('#input_2_2').type(el.email)
//                         cy.get('#input_2_3').type(el.msg)
//                         cy.get('#gform_submit_button_2').click()
//                         cy.get('#gform_confirmation_message_2').should('have.text', el.successMsg)
//               })
//     });

// });

//import fixtData from '../../fixtures/user.json'
//const fixtData = require('../../fixtures/user.json')
// xdescribe('Extract data from fixture using js', () => {

//     it('Using js import statement', () => {
//               cy.log(fixtData)
//               // fixtData  ---> Array
//               // fixtData[0]  ---> object
//               cy.visit('https://www.weifieldcontracting.com/contact/')
//               cy.get('[name="input_1.3"]').type(fixtData[0].firstName)
//               cy.get('[name="input_1.6"]').type(fixtData[0].lastName)
//               cy.get('#input_2_2').type(fixtData[0].email)
//               cy.get('#input_2_3').type(fixtData[0].msg)
//               cy.get('#gform_submit_button_2').click()
//               cy.get('#gform_confirmation_message_2').should('have.text', fixtData[0].successMsg)
//     });


//     it.only('Using js require keyword', () => {
//               cy.log(fixtData)
//               // fixtData  ---> Array
//               // fixtData[0]  ---> object
//               cy.visit('https://www.weifieldcontracting.com/contact/')
//               cy.get('[name="input_1.3"]').type(fixtData[0].firstName)
//               cy.get('[name="input_1.6"]').type(fixtData[0].lastName)
//               cy.get('#input_2_2').type(fixtData[0].email)
//               cy.get('#input_2_3').type(fixtData[0].msg)
//               cy.get('#gform_submit_button_2').click()
//               cy.get('#gform_confirmation_message_2').should('have.text', fixtData[0].successMsg)
//     });
// });


// xdescribe('Fetch data from fixture file using cypress fixture method', function () {
//     //fixture() methods using 1-> in describe block  define variable (i.e  let info) 2-> before block 3-> 
//     //fixture method() .under this access the data form fixture file path & use global variable
//     let FileData
//     //part of before hook
//     before("Get data from fixture data", function () {
//         cy.fixture('ABC/user1.json').then(fixtFileData => {
//             FileData = fixtFileData
//         })
//     })
//     it('hooks under fixture', () => {
//         cy.visit('https://www.weifieldcontracting.com/contact/')
//         cy.get('[name="input_1.3"]').type(FileData[0].firstName)
//         cy.get('[name="input_1.6"]').type(FileData[0].lastName)
//         cy.get('#input_2_2').type(FileData[0].email)
//         cy.get('#input_2_3').type(FileData[0].msg)
//     })
// })




//import obj from '../../fixtures/form1.json'
describe('Fetch data from fixture file using cypress fixture method', function () {
    //eg-> access fixture data by this keyword
   
    it('this keyword', () => {
        cy.fixture('user').then(function (fixData) {
            this.fixData = fixData
        })
        cy.visit(this.fixData[0].url)
        cy.get('[name="input_1.3"]').type(this.fixData[0].firstName)
        cy.get('[name="input_1.6"]').type(this.fixData[0].lastName)
    })


    //under it block using fixture nested path

    //it('Using cy.fixture get data from fixture file by using this keyword', () => {
    // //cy.fixture(filepath,encoding, options)

    // //cy.fixture('user').then(fixtFileData => {
    //   //        cy.log(fixtFileData)
    //// })

    // //cy.fixture('user.json').then(fixtFileData => {
    //    //       cy.log(fixtFileData)
    // //})

    // Nested path
    //           cy.fixture('ABC/user1.json').then(fixtFileData => {
    //                     cy.log(fixtFileData)
    //                     // fixtFileData  ---> Array
    //                     // fixtFileData[0]  ---> object
    //                     cy.visit('https://www.weifieldcontracting.com/contact/')
    //                     cy.get('[name="input_1.3"]').type(fixtFileData[0].firstName)
    //                     cy.get('[name="input_1.6"]').type(fixtFileData[0].lastName)
    //                     cy.get('#input_2_2').type(fixtFileData[0].email)
    //                     cy.get('#input_2_3').type(fixtFileData[0].msg)
    //           })
    // });



});