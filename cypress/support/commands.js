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

// beforeEach(function(){
//     cy.visit('http://automationpractice.com/index.php')
// })

Cypress.Commands.add('typeLogin', function(email, password){
    cy.get('[data-cy="LoginPage-email"]').type(email)
    cy.get('[data-cy="LoginPage-password"]').type(password)
    cy.get('[data-cy="LoginPage-submit"]').click()
})

Cypress.Commands.add('loginDemo', function(username, pwd){
    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(pwd)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    .click()

})