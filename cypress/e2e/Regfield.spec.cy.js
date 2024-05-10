describe('RegistrationPage', () => {

  beforeEach(()=>{
    
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')  
    
  })
  
 
 
    it('user with invalid credentials and password recovery', () => {
  
      cy.get(':nth-child(2) > .input').type('lukmanolayiwola125@gmail.com')
      cy.get(':nth-child(4) > .input').type('Tes123#')
      cy.get(':nth-child(5) > .button').click()
      cy.get("a[href='lookup.htm']").click()
      cy.get("a[href='lookup.htm']").click()
      cy.get(':nth-child(1) > [width="20%"]').type("Olayiwola")
      cy.get('#lastName').type("Alao")
      cy.get("input[name='address.street']").type("xxx 1234")
      cy.get("input[name='address.city']").type("yyyyyy")
      cy.get("input[name='address.state']").type("kkk")
      cy.get("input[id='address.zipCode']").type("23401")
      cy.get("input[name='ssn']").type("1234567890")
      cy.get('[colspan="2"] > .button').click()
     
  
    })
  
  
    it('first time registration', () => {
  
    cy.get('#loginPanel > :nth-child(3) > a').click()
    cy.get("input[id='customer.firstName']").type("Olayiwola")
    cy.get("input[id='customer.lastName']").type("Alao")
    cy.get("input[id='customer.address.street']").type("xxx 1234")
    cy.get("input[id='customer.address.city']").type("xxx")
    cy.get("input[id='customer.address.state']").type("kkk")
    cy.get("input[id='customer.address.zipCode']").type("yyyyyy")
    cy.get("input[id='customer.phoneNumber']").type("23401")
    cy.get("input[id='customer.ssn']").type("1234567890")
    cy.get("input[id='customer.username']").type("alao19982")
    cy.get("input[id='customer.password']").type("Alao12@")
    cy.get("input[id='repeatedPassword']").type("Alao12@")
    cy.get("input[value='Register']").click()
  
   })
   
  
  })