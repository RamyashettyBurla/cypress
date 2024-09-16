describe('user Login and Logout', () => {

    beforeEach(() => {
        
        cy.visit('https://demowebshop.tricentis.com/')
    })

    it('should log in successfully with valid credentials', () => {
        
        cy.get('.ico-login').click()
        cy.get('#Email').type('harry1725995859773@example.com') 
        cy.get('#Password').type('Password123!')  
        cy.get("input[value='Log in']").click()

    
        cy.get('.ico-logout').should('be.visible') 
        cy.get('.ico-logout').should('contain.text', 'Log out')  
    })

    it('should display an error message with invalid credentials', () => {
        
        cy.get('.ico-login').click()
        cy.get('#Email').type('wsertyuiol.email@example.com')  
        cy.get('#Password').type('asdfghjk123')  
        cy.get('input[value="Log in"]').click()

        
        cy.get('.validation-summary-errors > span').should('be.visible')  
        cy.get('.validation-summary-errors > span').should('contain.text', 'Login was unsuccessful')  
    })

    it('should log out successfully', () => {
        
        cy.get('.ico-login').click()
        cy.get('#Email').type('harry1725995859773@example.com')  
        cy.get('#Password').type('Password123!') 
        cy.get('input[value="Log in"]').click()

        
        cy.get('.ico-logout').should('be.visible')

        
        cy.get('.ico-logout').click()

        
        cy.get('.ico-login').should('be.visible')  
        cy.get('.ico-logout').should('not.exist')  
    })

})