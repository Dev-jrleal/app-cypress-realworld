describe('Visualizar Histórico de Transações', () => {
  it('Visualizar Histórico de Transações', () => {
    cy.visit('http://localhost:3000/login')

    cy.get('#username').type('Dina20')
    cy.get('#password').type('s3cret')
    cy.get('.css-q6gao2-MuiButtonBase-root-MuiButton-root').click()
    cy.get('[data-test="sidenav-home"]').contains('Home')

  })
})