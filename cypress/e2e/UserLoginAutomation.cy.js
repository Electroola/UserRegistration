
describe('User Login Scenarios', () => {

    beforeEach(() => {
        cy.visit('/')

    })

    it('Valid User Credentials', () => {



        cy.fixture('example').then((data) => {
            cy.fillValidUserDetails()
            cy.clickASubmitButton(data.LoginButton)
            //cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should("have.value","Dashboard")
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("contain","Dashboard")
        })
    })

    
    
    it('Invalid User credentials', () => {


        cy.fixture('example').then((data) => {
            cy.fillInvalidUserDetails()
            cy.clickASubmitButton(data.LoginButton)
            //cy.get('.oxd-alert-content > .oxd-text').should("contain","Invalid credentials")

            
        })
    })




    it('Valid Username and Invalid Passoword', () => {


        cy.fixture('example').then((data) => {
            cy.fillValidUserNameAndWrongPassword()
            cy.clickASubmitButton(data.LoginButton)
            cy.get('.oxd-alert-content > .oxd-text').should("contain","Invalid credentials")

        })
    })



    it('Invalid Username and Valid Password', () => {


        cy.fixture('example').then((data) => {
            cy.fillInvalidUserNameAndValidPassword()
            cy.clickASubmitButton(data.LoginButton)
            cy.get('.oxd-alert-content > .oxd-text').should("contain","Invalid credentials")

        })
    })




    it('Blank Username and Blank Password', () => {


        cy.fixture('example').then((data) => {
            cy.fillBlankUserNameAndBlankPassword()
            cy.clickASubmitButton(data.LoginButton)
            cy.get('.oxd-alert-content > .oxd-text').should("contain","Invalid credentials")
        })
    })


    it('Measure Page Load Time', () => {

        cy.measurePageLoadTime()


    })
})


