describe('Homepage', () => {

    beforeEach(() => {
        cy.visit('https://demowebshop.tricentis.com/')
    })

    it('load the homepage with correct URL and title', () => {
        cy.url().should('include', 'tricentis.com')
        cy.title().should('equal', 'Demo Web Shop')
    })

    it('display product categories', () => {

        cy.get("div[class='block block-category-navigation'] strong").should('have.text','Categories')
        cy.get("div[class='block block-category-navigation'] li:nth-child(1)").should('be.visible')
        cy.get("div[class='block block-category-navigation'] li:nth-child(2)").should('be.visible')
        cy.contains("Electronics").should('be.visible')
        cy.contains("Jewelry").should('be.visible')

    })

})