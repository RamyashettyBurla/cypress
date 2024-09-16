describe('product details', () => {


    it('product detail pages display accurate and add to cart button functionality', ()=>{

    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('#small-searchterms').type('computer')
    cy.get("input[class='button-1 search-box-button']").click()
    cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
    cy.contains('In stock').should('be.visible')
    cy.get('#add-to-cart-button-72').should('exist')
    cy.get('#add-to-cart-button-72').click()
   

    
    cy.get('#small-searchterms').type('laptop')
    cy.get("input[class='button-1 search-box-button']").click()
    cy.contains('14.1-inch Laptop').should('be.visible')
    cy.get('.button-2').should('exist')
    cy.get('.button-2').click()
    

    cy.get('#small-searchterms').type('smartphone')
    cy.get("input[class='button-1 search-box-button']").click()
    cy.contains('Smartphone').should('be.visible')
    cy.get('.button-2').should('exist')
    cy.get('.button-2').click()
   

    })
})
