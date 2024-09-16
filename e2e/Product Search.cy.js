describe('product search', () => {


    it('Test the search functionality and verify search results', ()=> {

    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('#small-searchterms').type('computer')
    cy.get("input[class='button-1 search-box-button']").click()
    cy.contains('Build your own cheap computer').should('be.visible')

    cy.get('#small-searchterms').type('diamond')
    cy.get("input[class='button-1 search-box-button']").click()
    cy.contains('Black & White Diamond Heart').should('be.visible')

    cy.get('#small-searchterms').type('laptop')
    cy.get("input[class='button-1 search-box-button']").click()
    cy.contains('14.1-inch Laptop').should('be.visible')

    cy.get('#small-searchterms').type('smartphone')
    cy.get("input[class='button-1 search-box-button']").click()
    cy.contains('Smartphone').should('be.visible')


    })


})