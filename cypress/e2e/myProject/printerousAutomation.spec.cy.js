/// <reference types = "Cypress"/>

import loginPage from '../../pages/printerous/loginPage'
import homeDashboard from '../../pages/printerous/homeDashboard'

describe('Automate Printerous website for portfolio', function(){
    context('Automate navigate URL and login page', function(){
        beforeEach(function(){
            cy.visit('https://orion.printerous.com/en')
        })

        it('Verify the protocol of the URL, it should be HTTPS', function(){
            cy.location('protocol').should('contains', 'https')
        })
        it('Verify the hostname of the URL, it should be orion.printerous.com', function(){
            cy.location('hostname').should('eq', 'orion.printerous.com')
        })
        it('Verify navigate URL, it should be contain text Announcement', function(){
            cy.get('.ml-2').should('contain.text', 'Announcement')
        })
        it('Verify when user try to access login page', function(){
            loginPage.navigateToLogin();
            cy.url().should('eq', 'https://orion.printerous.com/en/login');
        })
        it('User try to success login', function(){
            loginPage.navigateToLogin();
            loginPage.typeEmail('herlinaz.dummy@gmail.com');
            loginPage.typePassword('Print123*');
            loginPage.clickLogin();
        })
    })

    describe('Try to automate when the user order Packaging & Label', function(){
        beforeEach(function(){
            cy.visit('https://orion.printerous.com/en/login')
        })

        it('Automate to checkout an items', function(){
            cy.typeLogin('herlinaz.dummy@gmail.com', 'Print123*')
            homeDashboard.navigateToPackagingLabel();
            homeDashboard.selectSticker();
            homeDashboard.clickOrder();
            homeDashboard.selectVinylMatte();
            homeDashboard.selectShape();
            homeDashboard.selectSize();
            homeDashboard.selectQuantity();
            homeDashboard.selectDesign();
            homeDashboard.clickLinkBtn();
            homeDashboard.elements.linkInput().type('https://drive.google.com/drive/u/0/folders/1UMj9B9MiWzlX55Rm8YsBqiwsZbmGIbVf');
            homeDashboard.clickAddCart();
            homeDashboard.openCart();
            homeDashboard.elements.cartLabel().should('contain.text', 'Cart')
        })
    })
})