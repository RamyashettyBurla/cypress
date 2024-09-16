describe('Data management', () => {

    it(' fixtures ', ()=>{

    cy.visit('https://demowebshop.tricentis.com/login')

    cy.fixture('credentials').then( (cred)=>{

    cy.login(cred.email,cred.password)

    cy.contains(cred.expect).should('be.visible')

    })

    })

})