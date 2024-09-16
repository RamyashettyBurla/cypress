describe('cart management', () => {



    it('adding and removing and checking cart total calculations', ()=>{

        cy.visit('https://demowebshop.tricentis.com/')
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
   
       cy.get('.ico-cart .cart-qty').should(($newQty) => {
        const newCartQty = parseInt($newQty.text().replace(/[()]/g, ''));
        expect(newCartQty).to.eq(3); 
       })

       
       cy.get("a[class='ico-cart'] span[class='cart-label']").click()

       cy.get(':nth-child(1) > .remove-from-cart > input').check()

       cy.get('.update-cart-button').click()


       cy.get('.ico-cart .cart-qty').should(($newQty) => {
        const newCartQty = parseInt($newQty.text().replace(/[()]/g, ''));
        expect(newCartQty).to.eq(2); 
       })




    })


})