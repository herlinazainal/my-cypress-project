const { typeUsername } = require("./signIn")

class login{
    elements = {
        loginTab: ()=> cy.get('#login2'),
        usernameInput: ()=> cy.get('#loginusername'),
        pwdInput: ()=> cy.get('#loginpassword'),
        loginBtn: ()=> cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')

    }

    showLoginModal(){
        this.elements.loginTab().click()
    }

    typeUsername(username){
        this.elements.usernameInput().type(username)
    }

    typePassword(password){
        this.elements.pwdInput().type(password)
    }

    clickLogin(){
        this.elements.loginBtn().click()
    }
}

module.exports = new login()