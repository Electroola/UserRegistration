// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('clickASubmitButton', (einstein) => {

    cy.get(einstein).should('be.visible').and('exist').click()

})

Cypress.Commands.add('fillValidUserDetails', () => {
    cy.fixture('example').then((data) => {

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password)

    })

})




Cypress.Commands.add('fillInvalidUserDetails', () => {

    cy.fixture('example').then((data) => {

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.wrongUsername)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.wrongPassword)
    })

})

Cypress.Commands.add('fillValidUserNameAndWrongPassword', () => {
    cy.fixture('example').then((data) => {

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.wrongPassword)

    })

})



Cypress.Commands.add('fillInvalidUserNameAndValidPassword', () => {
    cy.fixture('example').then((data) => {

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.wrongUsername)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password)

    })

})




Cypress.Commands.add('fillBlankUserNameAndBlankPassword', () => {
    cy.fixture('example').then((data) => {

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.BlankUsername)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.BlankPassword)

    })

})

Cypress.Commands.add('measurePageLoadTime', () => {
    cy.window().then((win) => {
        const performance = win.performance;
        const timing = performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        cy.log(`Page Load Time: ${loadTime} ms`)
    })

})