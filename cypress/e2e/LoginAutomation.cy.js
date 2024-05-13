
describe('User Login', () => {

    beforeEach( ()=>    {
        cy.visit('https://opensource-demo.orangehrmlive.com/')

    })

    it('Valid User Credentials', () => {

        

        cy.fixture('example').then((data) => {
            cy.fillValidUserDetails()
            cy.clickASubmitButton(data.LoginButton)

        })
    })


    it('Invalid User credentials', () => {

        
        cy.fixture('example').then((data) => {
            cy.fillInvalidUserDetails()
            cy.clickASubmitButton(data.LoginButton)

        })
    })




    it('Valid Username and Invalid Passoword', () => {

        
        cy.fixture('example').then((data) => {
            cy.fillValidUserNameAndWrongPassword()
            cy.clickASubmitButton(data.LoginButton)

        })
    })



    it('Invalid Username and Valid Password', () => {

        
        cy.fixture('example').then((data) => {
            cy.fillInvalidUserNameAndValidPassword()
            cy.clickASubmitButton(data.LoginButton)

        })
    })



    


})