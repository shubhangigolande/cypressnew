////<reference types="cypress"/>

// mouseactions  --> Click, dbclick, rightclick, mouseOver

// 1. scroll ==>
// #Command ---> cy.scrollIntoView()

// xdescribe("Handel mouse scroll action", () => {

//     it("scroll page at specific element", () => {
//               cy.visit("http://www.tizag.com/htmlT/htmlradio.php");
//               cy.get(".cont a").scrollIntoView();
//     });
// });

// Action ==> // drag-drop
// MouseEvent --> Action (drad drop)
// mouseEvent --> mousedown, mouseUp, mouseMove, mouseOver

// child command -->
// cy.trigger(event,x,y,option)
// use trigger events to perform user actions


// xdescribe("Handel mouse actions by trigger method", () => {

//     it("Drag 'drag me' element & Drop on 'drop here' by trigger", () => {
//               cy.visit("https://testpages.herokuapp.com/styled/drag-drop-javascript.html");
//               cy.get("#draggable1").trigger("mousedown");
//               cy.get("#droppable1").trigger("mousemove");
//               cy.get("#droppable1 p").should("have.text", "Drop here");
//               cy.get("#droppable1").trigger("mouseup", { force: true });
//               cy.get("#droppable1 p").should("have.text", "Dropped!");
//     });

//     it.only("Drag 'drop here' element & Drop on 'No drop here' by trigger", () => {
//               cy.visit("https://testpages.herokuapp.com/styled/drag-drop-javascript.html");
//               cy.get("#draggable1").trigger("mousedown");
//               cy.get("#droppable2").trigger("mousemove");
//               cy.get("#droppable2 p").should("have.text", "No Drop here");
//               cy.get("#droppable2").trigger("mouseup", { force: true });
//               cy.get("#droppable2 p").should("have.text", "Dropped!");
//          });
// });


describe('handel mouse actions by trigger method', () => {

    it('drag "drag me" element & drop on "drop here" by trigger', () => {

        cy.visit('https://testpages.herokuapp.com/styled/drag-drop-javascript.html')

        cy.get('#draggable2 p').should('have.text','Drag me')
        cy.get('#draggable2').trigger('mousedown')       
        cy.get('#droppable2').trigger('mousemove')
        cy.get('#droppable2 p').should('have.text','No Drop here')
        cy.get('#droppable2').trigger('mouseup', { force: true })
        cy.get('#droppable2 p ').should('have.text', 'Dropped!')

    })

    it.only('drag "drop here" element & drop on "drop here" by trigger', () => {

        cy.visit('https://testpages.herokuapp.com/styled/drag-drop-javascript.html')

        cy.get('#draggable2 p').should('have.text','Drag me')
        cy.get('#draggable2').trigger('mousedown')       
        cy.get('#droppable1').trigger('mousemove')
        cy.get('#droppable1 p').should('have.text','Drop here')
        cy.get('#droppable1').trigger('mouseup', { force: true })
        cy.get('#droppable1 p ').should('have.text','Get Off Me!')

    })


})