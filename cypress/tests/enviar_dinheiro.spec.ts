describe('Enviar Dinheiro', () => {
  it('Saldo Suficiente', () => {
    cy.visit('http://localhost:3000/login')

    cy.get('#username').type('Heath93')
    cy.get('#password').type('s3cret')
    cy.get('.css-q6gao2-MuiButtonBase-root-MuiButton-root').click()
    cy.get('[data-test="sidenav-home"]').contains('Home')

    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').type('Kristian Bradtke')
    cy.get('[data-test="user-list-item-GjWovtg2hr"]').click()
    cy.get('#amount').type('450')
    cy.get('#transaction-create-description-input').type('Pagamento do Aluguel')
    cy.get('[data-test="transaction-create-submit-payment"]').click()
    cy.get('.MuiAlert-message')

  })

  it('Saldo Insuficiente', () => {
    cy.visit('http://localhost:3000/login')

    cy.get('#username').type('Dina20')
    cy.get('#password').type('s3cret')
    cy.get('.css-q6gao2-MuiButtonBase-root-MuiButton-root').click()
    cy.get('[data-test="sidenav-home"]').contains('Home')

    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').type('Ted Parisian')
    cy.get('[data-test="user-list-item-uBmeaz5pX"]').click()
    cy.get('#amount').type('100')
    cy.get('#transaction-create-description-input').type('Boleto')
    cy.get('[data-test="transaction-create-submit-payment"]').click()
    cy.get('.MuiAlert-message')

    

  })
})