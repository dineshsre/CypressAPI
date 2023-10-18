import payload from "../config/payload.json"

describe("POST API Calls",()=>{

    function randomEmail() {
        const altEmail = Math.random().toString(36).substring(2,10);
        const email =  altEmail+"@xyxmail.com";
        return email;
    }

    it("Post new User - JSON Payload",()=>{

        let emailaddress = randomEmail();   
        cy.log(emailaddress);
        let payload = {"name": "Sony",
                        "email":emailaddress,
                        "gender": "male",
                        "status": "inactive"
                    }
        cy.request({
            method: "POST",
            url:"https://gorest.co.in//public/v2/users",
            headers:{
                Authorization: "Bearer 5a619e8c2850fae838b99120dc6e834f862676ca01e4544a1d159efe7d3a88e3" 
            },
            body: payload,
        }).then((response)=>{
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property("name","Sony");
            expect(response.body).to.have.property("gender", "male");
            expect(response.body).to.have.property("status", "inactive");
        })

    })

    it("Post new User - Fixtures",()=>{

        let emailaddress = randomEmail();   
        cy.log(emailaddress);

        cy.fixture("apidata").then((apidataobj)=>{
            apidataobj.email = randomEmail(); ;
        cy.request({
            method: "POST",
            url:"https://gorest.co.in//public/v2/users",
            headers:{
                Authorization: "Bearer 5a619e8c2850fae838b99120dc6e834f862676ca01e4544a1d159efe7d3a88e3" 
            },
            body: apidataobj,
        }).then((response)=>{
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property("name","Sony");
            expect(response.body).to.have.property("gender", "male");
            expect(response.body).to.have.property("status", "inactive");
            expect(response.body.id).to.not.be.null;
        })
    })
    
    })


    it("Post new User - Config File payload",()=>{

        let emailaddress = randomEmail();   
        cy.log(emailaddress);

        payload.email = randomEmail(); ;
        cy.request({
            method: "POST",
            url:"https://gorest.co.in//public/v2/users",
            headers:{
                Authorization: "Bearer 5a619e8c2850fae838b99120dc6e834f862676ca01e4544a1d159efe7d3a88e3" 
            },
            body: payload,
        }).then((response)=>{
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property("name","Sony");
            expect(response.body).to.have.property("gender", "male");
            expect(response.body).to.have.property("status", "inactive");
            expect(response.body.id).to.not.be.null;
        })

    
    })


})