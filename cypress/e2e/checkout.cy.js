describe('SauceDemo Checkout Tests', () => {

  beforeEach(() => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()
  })

  it('should complete checkout successfully', () => {

    cy.contains('Add to cart')
      .first()
      .click()

    cy.get('.shopping_cart_link')
      .click()

    cy.get('[data-test="checkout"]')
      .click()

    cy.get('[data-test="firstName"]')
      .type('Vasco')

    cy.get('[data-test="lastName"]')
      .type('Silva')

    cy.get('[data-test="postalCode"]')
      .type('1000-100')

    cy.get('[data-test="continue"]')
      .click()

    cy.get('.summary_info')
      .should('be.visible')

    cy.get('[data-test="finish"]')
      .click()

    cy.contains('Thank you for your order!')
      .should('be.visible')
  })

  it('should display error when checkout form is incomplete', () => {

    cy.contains('Add to cart')
      .first()
      .click()

    cy.get('.shopping_cart_link')
      .click()

    cy.get('[data-test="checkout"]')
      .click()

    cy.get('[data-test="continue"]')
      .click()

    cy.get('[data-test="error"]')
      .should('be.visible')

    cy.contains('First Name is required')
      .should('be.visible')
  })

})