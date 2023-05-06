describe("User food purchase use case", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/"); // change URL to match your dev URL
  });

  it("User food purchase use case", () => {
    cy.get('[data-cy="image-test-cy"]').first().click();
    cy.get(
      '#clh9j66bq02ue3gj16nyimz9w > .restaurant-view-order-online-subcategory > .restaurant-view-order-online-dish > :nth-child(1) > .restaurant-view-individual-dish-main-line > [data-cy="button-add-food"]'
    ).click({ force: true });
    cy.get(
      '#clh9j66bv02ug3gj1cyq6ftqs > .restaurant-view-order-online-subcategory > .restaurant-view-order-online-dish > :nth-child(1) > .restaurant-view-individual-dish-main-line > [data-cy="button-add-food"]'
    ).click({ force: true });
    cy.get('.cart-item-finish-button').click({ force: true })
    cy.get('.header-person-icon').click()
    cy.get('[name=email]').type('diegodag.24@gmail.com')
    cy.get('[name=password]').type('password23')
    cy.get('.log-in-main-form-button').click()

    cy.get('.cart-item-finish-button').click({ force: true })
    cy.get('.cart-item-finish-button').click({ force: true })

    cy.get(':nth-child(1) > .delivery-personal-info').click({ force: true })

  });  
});
