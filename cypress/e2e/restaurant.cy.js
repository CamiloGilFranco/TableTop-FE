describe('The Restaurant Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/restaurants') // change URL to match your dev URL
  })

  it('redirección al restaurante', () => {
    cy.get('[data-cy="image-test-cy"]').should('have.length', 12)
    })


  it('redirección al restaurante', () => {
    cy.get('[data-cy="image-test-cy"]').first().click()
    })

  
})