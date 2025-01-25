describe('Registro Usuario', () => {
  it('Registro Success', () => {
    cy.visit('http://localhost:3000/login')

    cy.get('#username').type('Dina20')
    cy.get('#password').type('s3cret')
    cy.get('.css-q6gao2-MuiButtonBase-root-MuiButton-root').click()
    cy.get('[data-test="sidenav-home"]').contains('Home')

    cy.get('[data-test="sidenav-bankaccounts"] > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('[data-test="bankaccount-new"]').click()

    cy.get('#bankaccount-bankName-input').type('Banco do Brasil')
    cy.get('#bankaccount-routingNumber-input').type('123456789')
    cy.get('#bankaccount-accountNumber-input').type('987654321')
    cy.get('[data-test="bankaccount-submit"]').click()

  })

  it('Delete Registro', () => {
    cy.visit('http://localhost:3000/login')

    cy.get('#username').type('Dina20')
    cy.get('#password').type('s3cret')
    cy.get('.css-q6gao2-MuiButtonBase-root-MuiButton-root').click()
    cy.get('[data-test="sidenav-home"]').contains('Home')

    cy.get('[data-test="sidenav-bankaccounts"] > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('[data-test="bankaccount-list-item-XQvACcK5s"] > .MuiGrid-container > :nth-child(1) > .MuiTypography-root').click()

 
  })


  it('Registro Fail', () => {
    cy.visit('http://localhost:3000/login')

    cy.get('#username').type('Dina20')
    cy.get('#password').type('s3cret')
    cy.get('.css-q6gao2-MuiButtonBase-root-MuiButton-root').click()
    cy.get('[data-test="sidenav-home"]').contains('Home')

    cy.get('[data-test="sidenav-bankaccounts"] > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('[data-test="bankaccount-new"]').click()

    cy.get('#bankaccount-bankName-input').type('Banco do Brasil')
    cy.get('#bankaccount-routingNumber-input').type('123456789')
    cy.get('#bankaccount-accountNumber-input').type('98765432101234')
    cy.get('#bankaccount-accountNumber-input-helper-text').should('be.visible').and('contain', 'Must contain no more than 12 digits')
    // cy.get('.MuiAlert-message').should('contain', 'Must contain no more than 12 digits')
    

  })
  
})