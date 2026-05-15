describe('SauceDemo Cart Tests', () => {

  beforeEach(() => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()
  })

  it('should add multiple products to cart', () => {

  cy.get('button')
    .contains('Add to cart')
    .first()
    .click()

  cy.get('button')
    .contains('Add to cart')
    .eq(0)
    .click()

  cy.get('.shopping_cart_badge')
    .should('have.text', '2')
})

  it('should remove product from cart', () => {

    cy.contains('Add to cart')
      .first()
      .click()

    cy.get('.shopping_cart_badge')
      .should('contain', '1')

    cy.contains('Remove')
      .click()

    cy.get('.shopping_cart_badge')
      .should('not.exist')
  })

  it('should keep product in cart after navigation', () => {

    cy.contains('Add to cart')
      .first()
      .click()

    cy.get('.shopping_cart_link')
      .click()

    cy.get('.cart_item')
      .should('have.length', 1)

    cy.contains('Sauce Labs Backpack')
      .should('be.visible')
  })

})