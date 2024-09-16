describe('user Registration', () => {

    function email() {
        const system = Date.now(); 
        return `harry${system}@example.com`;
      }

    beforeEach(() => {
        cy.visit('https://demowebshop.tricentis.com/register')
    })

    it('should successfully register a user with valid inputs', () => {
       const user =email()
        cy.get('input#gender-male').check()  
        cy.get('input#FirstName').type('harry')
        cy.get('input#LastName').type('brook')
        cy.get('input#Email').type(user)
        cy.get('input#Password').type('Password123!')
        cy.get('input#ConfirmPassword').type('Password123!')
        cy.get('input#register-button').click()

        
        cy.get('div.result').should('contain.text', 'Your registration completed')
    })

    it('should display errors with invalid inputs', () => {
    
        cy.get('input#gender-male').check()  
        cy.get('input#FirstName').type('John')
        cy.get('input#LastName').type('Doe')
        cy.get('input#Email').type('john.doe@example.com')
        cy.get('input#Password').type('short123') 
        cy.get('input#ConfirmPassword').type('asdfgh123')  
        cy.get('input#register-button').click()

        cy.contains('The password and confirmation password do not match.').should('be.visible')


    })

       
})
