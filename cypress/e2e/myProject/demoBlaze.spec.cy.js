/// <reference types="Cypress"/>

import signIn from '../../pages/demoBlaze/signIn'
import login from '../../pages/demoBlaze/login'
import chekoutPhone from '../../pages/demoBlaze/checkoutPhone'

describe('Automation project for my new potfolio', function(){
    context('Automate Demo Blaze Website => Home Dashboard', function(){
        beforeEach(function(){
            cy.visit('https://www.demoblaze.com/')
        })
        it('Verify we navigates into the correct URL, it should be https://www.demoblaze.com/', function(){
            cy.url().should('eq', 'https://www.demoblaze.com/')
        })
        it('Verify the protocol of the URL, it should be HTTPS', function(){
            cy.location('protocol').should('contains', 'https')
        })
        it('Verify the hostname of the URL, it should be www.demoblaze.com', function(){
            cy.location('hostname').should('eq', 'www.demoblaze.com')
        })
        it('Try to Sign Up new User', function(){
            signIn.clickSignIn();
            signIn.typeUsername('automation-test');
            signIn.typePwd('dummyPwd');
            signIn.clickSignUp();
        })
        it('Try to login user account', function(){
            login.showLoginModal();
            login.typeUsername('automation-test');
            login.typePassword('dummyPwd');
            login.clickLogin();
        })
    })

    describe('Try to checkout phone', function(){
        beforeEach(function(){
            cy.visit('https://www.demoblaze.com/')
        })

        it('Automate the flow to checkout phone', function(){
            chekoutPhone.clickPhoneTab();
            chekoutPhone.selectSonyXperia();
            cy.url().should('eq', 'https://www.demoblaze.com/prod.html?idp_=6');
            cy.get('.name').should('contain.text', 'Sony xperia z5');
            chekoutPhone.addToCart();
            chekoutPhone.clickCart();
            chekoutPhone.elements.pageTitle().should('contain.text', 'Products')
        })
    })
})