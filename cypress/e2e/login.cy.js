describe('SauceDemo Login Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('should login successfully with valid credentials', () => {

    cy.get('[data-test="username"]')
      .should('be.visible')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .should('be.visible')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .should('be.visible')
      .click()

    cy.url()
      .should('include', '/inventory.html')

    cy.contains('Products')
      .should('be.visible')
  })

  it('should display error with invalid credentials', () => {

    cy.get('[data-test="username"]')
      .type('wrong_user')

    cy.get('[data-test="password"]')
      .type('wrong_password')

    cy.get('[data-test="login-button"]')
      .click()

    cy.get('[data-test="error"]')
      .should('be.visible')

    cy.contains('Username and password do not match')
      .should('be.visible')
  })

  it('should display error when password is empty', () => {

    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="login-button"]')
      .click()

    cy.get('[data-test="error"]')
      .should('contain', 'Password is required')
  })

})