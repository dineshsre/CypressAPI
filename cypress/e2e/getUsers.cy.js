describe("API TEST",()=>{
it("Get All Users",()=>{
    cy.request({
        method:"GET",
        url:"https://gorest.co.in/public/v2/users",
        headers: {
            Authorization : "5a619e8c2850fae838b99120dc6e834f862676ca01e4544a1d159efe7d3a88e3"
        }
    })

    .then((response)=>{
        cy.log(JSON.stringify(response));
        expect(response.status).to.equal(200)
       })
    
})

it("Get Single Users",()=>{
    cy.request({
        method:"GET",
        url:"https://gorest.co.in/public/v2/users/5369689",
        headers: {
            Authorization : "5a619e8c2850fae838b99120dc6e834f862676ca01e4544a1d159efe7d3a88e3"
        }
    })

    .then((response)=>{
        cy.log(JSON.stringify(response));
        expect(response.status).to.equal(200)
        expect(response.body.id).to.equal(5369689)
       })
    
})

it("Test for invalid endpoint/user",()=>{
    cy.request({
        method:"GET",
        url:"https://gorest.co.in/public/v2/users/536989",
        headers: {
            Authorization : "5a619e8c2850fae838b99120dc6e834f862676ca01e4544a1d159efe7d3a88e3"
        },
        failOnStatusCode: false
    })

    .then((response)=>{
        cy.log(JSON.stringify(response));
        expect(response.status).to.equal(404)
        
       })
    
})
})