class signIn{
    elements = {
        signInBtn: ()=> cy.get('#signin2'),
        usernameField: ()=> cy.get('#sign-username'),
        passwordField: ()=> cy.get('#sign-password'),
        signUpBtn: ()=> cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }

    typeUsername(username){
        this.elements.usernameField().type(username)
    }

    typePwd(password){
        this.elements.passwordField().type(password)
    }

    clickSignUp(){
        this.elements.signUpBtn().click()
    }

    clickSignIn(){
        this.elements.signInBtn().click()
    }
}

module.exports = new signIn()