describe('checkout process', () => {

    it('checkout process ands final confirmation', () =>{

    cy.visit('https://demowebshop.tricentis.com/login')

    cy.login('harry1725995859773@example.com','Password123!')

    cy.get('#small-searchterms').type('computer')
    cy.get("input[class='button-1 search-box-button']").click()
    cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
    cy.get('#add-to-cart-button-72').click()
   
    cy.get('#small-searchterms').type('laptop')
    cy.get("input[class='button-1 search-box-button']").click()
    cy.get('.button-2').click()
    
    cy.get('#small-searchterms').type('smartphone')
    cy.get("input[class='button-1 search-box-button']").click()
    cy.get('.button-2').click()
    

    cy.get('#topcartlink > .ico-cart').click()
    cy.get('#termsofservice').check()
    cy.get('#checkout').click()
    cy.get('#billing-address-select').select('New Address')
    cy.get('#BillingNewAddress_Company').type('flipkart')
    cy.get('#BillingNewAddress_CountryId').select('Canada')
    cy.get('#BillingNewAddress_StateProvinceId').select('Nova Scotia')
    cy.get('#BillingNewAddress_City').type('halifax')
    cy.get('#BillingNewAddress_Address1').type('67,erty,yuio')
    cy.get('#BillingNewAddress_Address2').type('67,erty,yuio')
    cy.get('#BillingNewAddress_ZipPostalCode').type(277012)
    cy.get('#BillingNewAddress_PhoneNumber').type('9878675431')
    cy.get('#BillingNewAddress_FaxNumber').type('569087')
    cy.get('#billing-buttons-container > .button-1').click()
    cy.get('#shipping-buttons-container > .button-1').click()
    cy.get('#shipping-method-buttons-container > .button-1').click()
    cy.get('#payment-method-buttons-container').click()
    cy.get('#payment-method-buttons-container > .button-1').click()

    cy.contains('You will pay by COD').should('be.visible')

    cy.get('#payment-info-buttons-container > .button-1').click()

    cy.get('#confirm-order-buttons-container > .button-1').click()

    cy.get("div[class='title'] strong").should('have.text','Your order has been successfully processed!')


    })
})