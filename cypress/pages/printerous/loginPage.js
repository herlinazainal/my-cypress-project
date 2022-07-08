const { typeUsername } = require("../demoBlaze/signIn")

class loginPage{
    elements = {
        loginTab: ()=> cy.get('[data-cy="UserBadge-login"] > .d-flex'),
        emailInput: ()=> cy.get('[data-cy="LoginPage-email"]'),
        passwordInput: ()=> cy.get('[data-cy="LoginPage-password"]'),
        loginBtn: ()=> cy.get('[data-cy="LoginPage-submit"]')
    }

    navigateToLogin(){
        this.elements.loginTab().click()
    }

    typeEmail(email){
        this.elements.emailInput().type(email)
    }

    typePassword(password){
        this.elements.passwordInput().type(password)
    }

    clickLogin(){
        this.elements.loginBtn().click()
    }
}

module.exports = new loginPage()