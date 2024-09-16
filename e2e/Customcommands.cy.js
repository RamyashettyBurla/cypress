describe('Custom commands', () => {

    it('using custom command for login', () =>{

    cy.visit('https://demowebshop.tricentis.com/login')

    cy.login('harry1725995859773@example.com','Password123!')

    cy.get('.ico-logout').should('be.visible') 

    cy.get('.ico-logout').should('contain.text', 'Log out')  

    })

})