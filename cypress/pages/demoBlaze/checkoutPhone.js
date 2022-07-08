class chekoutPhone{
    elements = {
        phoneTab: ()=> cy.contains('Phones'),
        sonyXperia: ()=> cy.get('div h4 a[href="prod.html?idp_=6"]'),
        addCartBtn: ()=> cy.get('.col-sm-12 > .btn'),
        cartTab: ()=> cy.get('#cartur'),
        pageTitle: ()=> cy.get('.col-lg-8 > h2')
    }

    clickPhoneTab(){
        this.elements.phoneTab().click()
    }

    selectSonyXperia(){
        this.elements.sonyXperia().click()
    }

    addToCart(){
        this.elements.addCartBtn().click()
    }

    clickCart(){
        this.elements.cartTab().click()
    }
}

module.exports = new chekoutPhone()