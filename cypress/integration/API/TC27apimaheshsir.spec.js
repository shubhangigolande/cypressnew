describe('validate the api chain',()=>{
    it('verifydate the api chain',()=>{
        cy.request({
            method:"POST",
            url:`https://gorest.co.in/public/v2/users`,
            body:{
                "name": "sujata deshmukh",
                "gender": "female",
                "email": `sujata${Math.random() * 3}@gmail.com`,
                "status": "active",
            },
            headers:{
                Authorization: "Bearer 4ac89400c8430466d431c5500772d9c9dbceeb431d38ef90caa4c839dd5e670a"
            },
        }).then((res)=>{
           
           return res.body.id
        }).then((id)=>{
           
           cy.request({
            method:"PUT",
            url:`https://gorest.co.in/public/v2/users/${id}`,
            body:{
                "name": "sujata anand deshmukh",
                
                "email": `sujata.deshmukh${Math.random() * 3}@gmail.com`,
                "status": "active",
            },
            headers: {
                      Authorization: "Bearer 4ac89400c8430466d431c5500772d9c9dbceeb431d38ef90caa4c839dd5e670a"
                    },
           }).then((res)=>{
            return res.body.id
           })
           .then((id)=>{
            
            cy.request({
                method:"DELETE",
                url:`https://gorest.co.in/public/v2/users/${id}`,
                headers:
                {
                    Authorization: "Bearer 4ac89400c8430466d431c5500772d9c9dbceeb431d38ef90caa4c839dd5e670a"
                }
            }).then((res)=>{
                cy.log(res)
                expect(res.status).to.eq(204)
            })
         })            
     })
  })
})

// describe('Validate Basic auth API', () => {

//     it('Verify Gorest API', () => {
//         cy.request({
//             method: "POST",
//             url: "https://gorest.co.in/public/v2/users",
//             body: {
//                 "name": "sujata deshmukh",
//                 "gender": "female",
//                 "email": `sujata${Math.random() * 3}@gmail.com`,
//                 "status": "active"
//             },
//             headers: {
//                 Authorization: "Bearer 4ac89400c8430466d431c5500772d9c9dbceeb431d38ef90caa4c839dd5e670a"
//             }
//         }).then((res) => {
//             return res.body.id
//         }).then((id) => {
//             //cy.log(id)
//             cy.request({
//                 method: "PUT",
//                 url: `https://gorest.co.in/public/v2/users/${id}`,
//                 body: {
//                     "name": "sujata Ramesh deshmukh",
//                     "email": `sujata.deshmukh${Math.random() * 2}@gmail.com`,
//                     "status": "active"
//                 },
//                 headers: {
//                     Authorization: "Bearer 4ac89400c8430466d431c5500772d9c9dbceeb431d38ef90caa4c839dd5e670a"
//                 }
//             }).then((res) => {
//                 return res.body.id
//             }).then((id) => {
//                 cy.log(id)
//                 cy.request({
//                     method: "DELETE",
//                     url: `https://gorest.co.in/public/v2/users/${id}`,
//                     headers: {
//                         Authorization: "Bearer 4ac89400c8430466d431c5500772d9c9dbceeb431d38ef90caa4c839dd5e670a"
//                     }
//                 }).then((res) => {
//                     cy.log(res)
//                     expect(res.status).to.eql(204)
//                 })
//             })
//         })
//     })
// })
