describe('verify the API',()=>{
    it('validate get the API',()=>{
        cy.request({
            method:"GET",
            url:'https://reqres.in/api/users?page=2'

        }).then((response)=>{
            cy.console.log((response));
            expect(response.status).to.eq(200)
            expect(response.status.text).to.eql("OK")
            expect(response.body).to.have.property('page')
            expect(response.body.page).to.eq(2)

        })
    })
    it('validate post the API',()=>{
        cy.request({
            method:"POST",
            url:'https://reqres.in/api/users',
            body:{
                "name": "sarika",
                "job": "leader",
            }
        }).then((response)=>{
            cy.log((response));
            // id=response.id
            // cy.log(id)
            expect(response.status).to.eq(201)
            expect(response.status.text).to.eql("Created")
            expect(response.body.name).to.eql('sarika')
            expect(response.body.job).to.eql('leader')

        })
    })

    it('validate PUT the API',()=>{
            cy.request({
                method:"PUT",
                url:'https://reqres.in/api/users/2',
                body:{
                    "name": "morpheus",
                    "job": "leader",
                }
            }).then((response)=>{
                cy.log((response));
                id=response.id
                cy.log(id)
                expect(response.status).to.eq(200)
                expect(response.status.text).to.eql("OK")
                expect(response.body.name).to.eql('shubhangi')
                expect(response.body.job).to.eql('leader')
    
            })
    })

    it('validate DELETE the API',()=>{
        cy.request({
            method:"DELETE",
            url:'https://reqres.in/api/users/2',
            }).then((response)=>{
            cy.log((response))
            expect(response.status).to.eq(204)
            expect(response.status.text).to.eql("No Content")
        })
    })
})