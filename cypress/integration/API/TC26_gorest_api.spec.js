describe('Validate Basic Auth Apis', () => {
    it('Validate Get User Api', () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: "Bearer 4ac89400c8430466d431c5500772d9c9dbceeb431d38ef90caa4c839dd5e670a"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eql(200)
           expect(res.body.length).to.eq(10)
            expect(res.duration).to.be.lessThan(500)
        })
    })

    it('Validate Basic auth Post Api', () => {
        let email = `tenuli.racmakrishna@15${Math.random()*3}ce.com`
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                
                 "name":"Tenali Ramakrishna",
                 "gender":"female",
                  "email":email,
                  "status":"active"
                   
            },
            headers: {
                Authorization: "Bearer 4ac89400c8430466d431c5500772d9c9dbceeb431d38ef90caa4c839dd5e670a"
            }
        }).then((res) => {
            cy.log(email)
            cy.log(res)
            expect(res.status).to.eql(201)
            expect(res.duration).to.be.lessThan(500)
        })
    })

    it('Validate basic auth Put Api', () => {
        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/1012496",
            body: {
                "name": "shubhangi bhosale",
                "email": `shubhu.bhosale${Math.random()*3}@gmail.com`,
                "status": "active"
            },
            headers: {
                Authorization: "Bearer 4ac89400c8430466d431c5500772d9c9dbceeb431d38ef90caa4c839dd5e670a"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eql(200)
            expect(res.duration).to.be.lessThan(500)
        })
    })

    it('Validate Delete basic Auth API',()=>{
        cy.request({
            method:"DELETE",
            url:"https://gorest.co.in/public/v2/users/1012496",
            headers: {
                Authorization: "Bearer 4ac89400c8430466d431c5500772d9c9dbceeb431d38ef90caa4c839dd5e670a"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eql(204)
            expect(res.duration).to.be.lessThan(500)
        })
    })
})