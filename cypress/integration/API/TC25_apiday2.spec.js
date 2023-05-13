decsribe('verify the api',()=>{
    it('validate the api',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((response)=>{
            cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.status.text).to.eq("ok")
            expect(response['body']['data'].length).to.eq(response['body']['data'].length)
            expect(response['body']['per_page']).eq(6)
            expect(response['body']['page']).eq(2)
        })

    })
    it('validate the multiple api',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((response)=>{
            response.body.data.forEach(el => {
                expect(el).to.haveOwnProperty('id')
                expect(el).to.haveOwnProperty('email')
                expect(el).to.haveOwnProperty('first_name')
                expect(el).to.haveOwnProperty('last_name')
                expect(el).to.haveOwnProperty('avatar')
                //expect(el).to.all.keys('id','emeil','first_name','last_name','avatar')
            });          
        })
    })
    it('validate the single user api',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((response)=>{
            cy.log(response)
            expect(response.body.data[0].email).to.eql('michaellawson@reqresin')
        })
    })
})