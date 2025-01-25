describe('Login', () => {
  it('Login Success', () => {
    cy.visit('http://localhost:3000/login')

    cy.get('#username').type('Dina20')
    cy.get('#password').type('s3cret')
    cy.get('.css-q6gao2-MuiButtonBase-root-MuiButton-root').click()
    cy.get('[data-test="sidenav-home"]').contains('Home')

  })
})

describe("Login ",() => {
  it('Login Fail',() => {
    cy.visit('http://localhost:3000/login')

    cy.get('#username').type('junior')
    cy.get('#password').type('123456')
    cy.get('.css-q6gao2-MuiButtonBase-root-MuiButton-root').click()
    
    cy.get('.MuiAlert-message').should('contain', 'Username or password is invalid')
    
  })
  
})