class homeDashboard{
    elements = {
        packagingLabel: ()=> cy.get('[data-cy="SubmenuTitle-packaging-label"]'),
        stickerDieCut: ()=> cy.get('[data-cy="ProductCatalog-overlay-single-label-sticker-packaging-die-cut"] > .css-1hg8a4a'),
        orderBtn: ()=> cy.get('[data-cy="ProductCatalog-btnMulaiPesan"] > .btn'),
        vinylMatte: ()=> cy.get('.css-1gigsen'),
        roundShape: ()=> cy.get('.css-1gjm3q5'),
        productSize: ()=> cy.get(':nth-child(3) > :nth-child(2) > .tooltip-child > .position-relative > .css-u3s9d4-Radio-SpecRadio > .w-100 > .content'),
        quantity: ()=> cy.get(':nth-child(2) > .test-priceQty'),
        uploadDesign: ()=> cy.get(':nth-child(3) > .w-100 > .content'),
        linkBtn: ()=> cy.get('[data-cy="UploadFile-sumberUploadLink"]'),
        linkInput: ()=> cy.get('[data-cy="UploadFile-link"]'),
        addToCart: ()=> cy.get('[data-cy="AddToCartButton"]'),
        clickCart: ()=> cy.get('[data-cy="AddToCartModal-CartBtn"]'),
        cartLabel: ()=> cy.get('div h1[class="d-none d-md-block med-28 text-center mb-5"]')
    }

    navigateToPackagingLabel(){
        this.elements.packagingLabel().click()
    }

    selectSticker(){
        this.elements.stickerDieCut().trigger('mouseover', {force: true})
    }

    clickOrder(){
        this.elements.orderBtn().click()
    }

    selectVinylMatte(){
        this.elements.vinylMatte().click()
    }

    selectShape(){
        this.elements.roundShape().click()
    }

    selectSize(){
        this.elements.productSize().click()
    }

    selectQuantity(){
        this.elements.quantity().click()
    }

    selectDesign(){
        this.elements.uploadDesign().click()
    }

    clickLinkBtn(){
        this.elements.linkBtn().click()
    }

    clickAddCart(){
        this.elements.addToCart().click()
    }

    openCart(){
        this.elements.clickCart().click()
    }
}

module.exports = new homeDashboard()
