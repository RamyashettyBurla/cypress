describe('visual testing', () => {

    it(' login page design', () => {

        
       cy.visit('https://demowebshop.tricentis.com/register')
    
        cy.get('body').compareSnapshot('ramya',0.2)

      })
    
      
    })


