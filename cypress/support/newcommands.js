Cypress.Commands.add('fillSignUpForm', () => {
    
        cy.get("#fullname").type('Alao Olayiwola')
        cy.get('#businessname').type('Electron');
        cy.get('#businessemail').type('lukmanolayiwola125@gmail.com')
        cy.get('#businessphonenumber').type('0123456789');
        cy.get('#businessRegNum').type('123')
        cy.get('.sc-imWYAI').click()

    })

